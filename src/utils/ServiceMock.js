import { employeesData } from './serviceData';

class ServiceMock {
  // eslint-disable-next-line class-methods-use-this
  getEmployees() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employeesData);
      }, 0);
    });
  }
}

export const serviceMock = new ServiceMock();
