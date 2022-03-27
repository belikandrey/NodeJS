process.stdin.on('data', data=>{
    console.log([...data.toString()].reverse().join(""));//console.log calls process.stdout.write
});