const student = {
    name: 'John',
    age: 30,
    stacks: ['MERN', 'JAVA', 'PYTHON'],
    getStacks: function() {
        this.stacks.forEach((stack) => {
            console.log(stack, this.name);
        });
    },
    errStacks: function() {
        this.stacks.forEach(
            function(stack) {
                console.log(stack, this.name);
            }
        );
    }
}

student.getStacks();
student.errStacks(); //undefined 

