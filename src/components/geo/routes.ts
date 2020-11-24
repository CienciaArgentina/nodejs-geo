import { Request, Response } from 'express';
import { getCities, getCountries, getLocalities, getStates } from './service';
import { HttpStatusCode } from '../../commons/constants';

export default [
  {
    path: '/geo/countries',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getCountries();
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/geo/countries/:id/states',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getStates(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/geo/states/:id/cities',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getCities(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: '/geo/cities/:id/localities',
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getLocalities(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
];
