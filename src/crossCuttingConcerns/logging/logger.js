export class BaseLogger{
    log(data){
        console.log("default "+data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to elastic "+data)
    }
}

export class MonoLogger extends BaseLogger{
    log(data){
        console.log("Logged to mongo "+data)
    }
}