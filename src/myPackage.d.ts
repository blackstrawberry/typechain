interface Config{
  url: string;
}
declare module "myPackage"{
  function init(Config: Config):boolean;
  function exit(code: number):number;
}