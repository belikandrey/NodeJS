process.stdin.on('data', data=>{
    console.log(data.toString().split("").reverse().join(""));//console.log calls process.stdout.write
});