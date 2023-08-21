import '@testing-library/jest-dom';
import { mswServer } from '../mocks/server';

beforeEach(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
