import { Request, Response } from 'express';
import { getCities, getCountries, getLocalities, getStates } from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils';

export default [
  {
    path: Paths.Countries,
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getCountries();
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.States,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getStates(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.Cities,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getCities(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.Localities,
    method: 'get',
    handler: [
      async ({ params }: Request, res: Response): Promise<void> => {
        const result = await getLocalities(params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
];
