/* eslint-disable prettier/prettier */
import { StatusType, ErrorType } from '../model/Response';

export const success: StatusType = {
  status: 'success'
};

export const updated: StatusType = {
  status: 'updated'
};

export const created: StatusType = {
  status: 'created'
};

export const error: StatusType = {
  status: 'error'
};

export const notFound: StatusType = {
  status: 'notFound'
};

export const errorValidationComment : ErrorType = {
  type: 'validation',
  message: 'missing comment'
};

