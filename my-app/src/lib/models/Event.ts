export class Event {
    constructor(
        public id: string,
        public title: string,
        public start: Date,
        public end: Date,
        public description: string = ''
    ) {
        
    }


}
