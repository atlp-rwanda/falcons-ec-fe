import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import Swal from 'sweetalert2';
import { vi } from 'vitest';
import { updateProduct } from '../src/redux/slices/product/productUpdate';

vi.mock('axios');
vi.mock('sweetalert2');

const mockStore = configureMockStore([thunk]);

// Create a file object from a base64-encoded image
function createImageFileFromBase64(base64String, fileName) {
  // Remove the data URL prefix (e.g., "data:image/png;base64,")
  const base64Data = base64String.replace(
    /^data:image\/(png|jpeg|jpg);base64,/,
    ''
  );

  // Convert the base64 string to a Uint8Array
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  // Create the Blob object from the Uint8Array
  const blob = new Blob(byteArrays, { type: 'image/png' });

  // Create the File object from the Blob
  return new File([blob], fileName, { type: 'image/png' });
}

// Test the async thunk
test('should update product successfully', async () => {
  const store = mockStore({});
  const base64String =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQImWNgYGD4TwAB//9/GnUPdQAAXeZXTgAAAABJRU5ErkJggg==';
  const fileName = 'image.png';

  const file = createImageFileFromBase64(base64String, fileName);
  const mockData = {
    productName: 'product 110',
    description: 'this is product 110',
    category_id: '1234',
    price: '123',
    quantity: '45',
    expiryDate: '2023-09-09',
    images: [file, file, file, file],
  };

  // Mock axios patch request
  axios.mockResolvedValueOnce({
    status: 200,
    data: {
      status: 200,
      success: true,
      message: 'Product updated successfully',
      data: {
        productName: 'product 110',
        description: 'this is product 110',
        category_id: '1234',
        price: '123',
        quantity: '45',
        expiryDate: '2023-09-09',
      },
    },
  });

  // Mock Swal fire
  Swal.fire.mockResolvedValueOnce({});

  await store.dispatch(updateProduct(mockData));

  const actions = store.getActions();

  expect(actions).toEqual([
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(Object),
        requestStatus: 'pending',
      }),
      type: 'product/productUpdate/pending',
    }),
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(Object),
        requestStatus: 'fulfilled',
      }),
      payload: {
        data: {
          productName: 'product 110',
          description: 'this is product 110',
          category_id: '1234',
          price: '123',
          quantity: '45',
          expiryDate: '2023-09-09',
        },
        message: 'Product updated successfully',
        status: 200,
        success: true,
      },
      type: 'product/productUpdate/fulfilled',
    }),
  ]);
});

test('should handle update product error', async () => {
  const store = mockStore({});
  const base64String =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQImWNgYGD4TwAB//9/GnUPdQAAXeZXTgAAAABJRU5ErkJggg==';
  const fileName = 'image.png';

  const file = createImageFileFromBase64(base64String, fileName);
  const mockData = {
    productName: 'product 110',
    description: 'this is product 110',
    category_id: '1234',
    price: '123',
    quantity: '45',
    expiryDate: '2023-09-09',
    images: [file, file, file, file],
  };

  // Mock axios post request error
  const errorResponse = { error: 'Product not updated!' };
  axios.mockRejectedValueOnce({ response: { data: errorResponse } });

  // Mock Swal fire
  Swal.fire.mockResolvedValueOnce({});

  await store.dispatch(updateProduct(mockData));

  const actions = store.getActions();

  expect(actions).toEqual([
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(Object),
        requestStatus: 'pending',
      }),
      type: 'product/productUpdate/pending',
      payload: undefined,
    }),
    expect.objectContaining({
      meta: expect.objectContaining({
        arg: expect.any(Object),
        requestStatus: 'fulfilled',
      }),
      payload: {
        response: {
          data: {
            error: 'Product not updated!',
          },
        },
      },
      type: 'product/productUpdate/fulfilled',
    }),
  ]);
});
