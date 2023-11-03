abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){
    }
    abstract getSepia(): void;
    getReelTime(){
        return 8;
    }

}
class Instagram extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter);
    }
    getSepia(){
        console.log("Sepia")
    }
}

const test = new Instagram("test", "test", 10);
test.getSepia();
console.log(test.getReelTime())

const abc={
    name:"test",
    asd(){
        console.log(this.name)
    }
}

abc.asd()