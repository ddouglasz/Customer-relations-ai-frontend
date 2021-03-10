export interface ExpressionsTypes {
    id: string, 
    text: string
}

export interface IntentsTypes {
    id: string,
    name: string,
    description: string,
    trainingData: {
        expressionCount: number,
        expressions: ExpressionsTypes[] 
    }
    reply: {
        id: string
        text: string
    }
};