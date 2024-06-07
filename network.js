class level{
    constructor(inputCount,outputCount){
        this.inputs = new Array(inputCount);
        this.outputs = new Array(outputCount);
        this.biases = new Array(outputCount);

        this.weights = [];
        for(let i = 0; i < outputCount; i++){
            this.weights[i] = new Array(outputCount);
        }

        level.#randomize(this);
    }
    static #randomize(level){
        for(let i = 0; i < level.inputCount; i++){
            for(let j = 0; j < level.outputCount; j++){
                level.weights[i][j] = Math.random() * 2 - 1;
            }
        }

        for(let i = 0; i < level.biases.length; i++){
            level.biases[i] = Math.random() * 2 - 1;
        }
    }
    
    static feedForward(givenInputs, level){
        for(let i = 0; i < givenInputs.length; i++){
            level.inputs[i] = givenInputs[i];
        }

        for(let i = 0; i < level.outputCount; i++){
            let sum = 0;
            for(let j = 0; j < level.inputCount; j++){
                sum += level.inputs[j] * level.weights[j][i];
            }

            if(sum > level.biases[i]){
                level.outputs[i] = 1;
            }else{
                level.outputs[i] = 0;
            }
        }

        return level.outputs;
    }
}