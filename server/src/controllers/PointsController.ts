import { Request, Response }  from 'express'; // importar o formato do Request e Response do express
import knex from '../database/connection'; // importar a conexão com banco de dados


class PointsController {
    // Método Controller Index: para listar os pontos de coleta por filtro city/uf/items
    async index(request: Request, response: Response){
        const { city, uf, items } = request.query;
        const parsedItems = String(items).split(',').map(item => Number(item.trim()));
    
        const points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*');

        return response.json(points);
    }

    // Método Controller Show: para exibir um ponto de coleta específico
    async show(request: Request, response: Response){
        const { id } = request.params;
        const point = await knex('points').where('id', id).first();
        
        if (!point){
            return response.status(400).json({message: 'Point not found'});
        }
        
        //dentro desse ponto de coleta, listar os items que ele coleta
        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

        return response.json({ point, items });
    }

    // Método Controller Create: para criar os pontos de coleta
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        // faz a próxima query depender da execução da primeira
        const trx = await knex.transaction(); 
    
        //cria um objeto com todos os dados do 'point"
        const point = {
            image:'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
        
        const insertedIds = await trx('points').insert(point);
    
        // Query para relacionar 'items' e 'points'
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id:number) => {
            return {
                item_id,
                point_id,
            };
        });
    
        await trx('point_items').insert(pointItems); 
    
        await trx.commit();

        return response.json ({ 
            id: point_id,
            ... point,
         });
    }
}

// exporta a classe criada
export default PointsController;