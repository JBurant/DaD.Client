import { ErrorModel } from "./error-model.service";

export class ServerResponseModel {
    public errors: ErrorModel[];
    public message: string;
    public warnings: string[];
  }