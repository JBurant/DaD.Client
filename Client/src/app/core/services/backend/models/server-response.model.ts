import { ErrorModel } from "./error.model";

export class ServerResponseModel {
    public errors: ErrorModel[];
    public message: string;
    public warnings: string[];
  }