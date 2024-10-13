import { asClass, createContainer } from "awilix";
import { SearchService } from "./services/search.service";
import { HttpService } from "./services/http.service";

export interface IContainer {
  searchService: SearchService;
  httpService: HttpService;
}
const container = createContainer()
  .register({
    searchService: asClass(SearchService).singleton(),
    httpService: asClass(HttpService).singleton(),
  });

export default container;
