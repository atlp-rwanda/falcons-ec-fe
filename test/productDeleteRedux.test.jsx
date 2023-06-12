import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';
import { vi } from 'vitest';
import { deleteSingleProduct } from '../src/redux/slices/product/productDelete';

vi.mock('axios');
vi.mock('sweetalert2');

const mockStore = configureMockStore([thunk]);

// Test the async thunk
test('should delete product successfully', async () => {
  const store = mockStore({});

  const mockData = '1234';

  // Mock axios request
  axios.mockResolvedValueOnce({
    status: 200,
    success: true,
    message: 'Product deleted successfully',
  });

  await store.dispatch(deleteSingleProduct(mockData));

  const actions = store.getActions();

  expect(actions).toEqual([
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(String),
        requestStatus: 'pending',
      }),
      type: 'product/deleteProduct/pending',
    }),
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(String),
        requestStatus: 'fulfilled',
      }),
      type: 'product/deleteProduct/fulfilled',
    }),
  ]);
});

test('should handle product delete Error', async () => {
  const store = mockStore({});

  const mockData = '1234';

  // Mock axios post request error
  const errorResponse = { error: 'Product not updated!' };
  axios.mockRejectedValueOnce({ response: { data: errorResponse } });

  await store.dispatch(deleteSingleProduct(mockData));

  const actions = store.getActions();

  expect(actions).toEqual([
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(String),
        requestStatus: 'pending',
      }),
      type: 'product/deleteProduct/pending',
    }),
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(String),
        requestStatus: 'fulfilled',
      }),
      payload: {
        response: {
          data: {
            error: 'Product not updated!',
          },
        },
      },
      type: 'product/deleteProduct/fulfilled',
    }),
  ]);
});
