import axios from 'axios';
import * as status from '../../constant/response';
import { environment } from '../../../environments/environment';

describe('Main', () => {
  it('GET: should return 200 on /ping service', async () => {
    const response = await axios.get(`${environment.baseUrl}/ping`);
    expect(response.status).toStrictEqual(200);
    expect(response.data).toStrictEqual(status.success);
  });

  it('ALL REQUESTS: should return 404 if url is not a valid request', async () => {
    try {
      await axios.get(environment.baseUrl);
    } catch (e) {
      expect(e.response.data).toEqual(status.notFound);
      expect(e.response.status).toEqual(404);
    }
  });
});
