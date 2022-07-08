let input = prompt("what would you like to do?")

const todo = ['collect chicken eggs', 'clean litter box'];

while (input !== 'quit') {

    if (input === 'list') {
        console.log('*********************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('*********************')
    }

    else if (input === 'new') {
        const newtodo = prompt('ok, what is the new todo?');
        todo.push(newtodo);
        console.log(`${newtodo} added to list`);
    }

    else if (input === 'delete') {
        const index = parseInt(prompt(`what would you like to delete?`));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`ok, deleted ${deleted[0]}`);
        }
        else {
            console.log(`unknown index`);
        }
    }
    
    input = prompt("what would you like to do?");
}

console.log("you quit the app")