import { IContainer } from "./container";

export default class BaseContext {
  constructor(protected di: IContainer) {}
}
