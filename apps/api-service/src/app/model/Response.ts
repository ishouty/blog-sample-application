/* eslint-disable prettier/prettier */
export type StatusType = { 
  status: 'success' | 'created' | 'updated' | 'error' | 'notFound',
};

export type ErrorType = {
  type: 'validation',
  message: string
};