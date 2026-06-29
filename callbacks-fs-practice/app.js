import { create } from 'domain'
import fs from 'fs'


// 1

fs.writeFile("data/message.txt", ("Hello from Node fs!\n"), (err) => {
    if (err) return console.log(err)
    console.log("File was created successfully")
})

// 2
fs.readFile("data/message.txt", "utf-8", (err, data ) => {
    if (err) return console.log(err);
    console.log(data)
})

// 3
console.log("start")
fs.readFile("data/message.txt", "utf-8", (err, data ) => {
    if (err) return console.log(err);
    console.log(data)
})
console.log("end")

// 4
fs.readFile("data/not-exist.txt", "utf-8", (err, data ) => {
    if (err) return console.log("Could not read file");
    console.log(data)
})

// 5

function readTextFile(filePath, callback) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) return callback(err);
        return callback(null, data);
    });
};

readTextFile('data/message.txt', function (err, content) {
  if (err) {
    console.log('Error:', err);
    return;
  }

  console.log(content);
});

// 6

fs.appendFile("data/message.txt", ("This line was added later.\n"), (err) => {
    if (err) return console.log(err)
    fs.readFile("data/message.txt", "utf-8", (err, data ) => {
    if (err) return console.log(err);
    console.log(data)
    })
})

// 7
fs.writeFile("data/log.txt", "Log started\n", (err) => {
    if (err) return console.log(err)
    fs.appendFile("data/log.txt", "First action completed\nSecond action completed\n" ,(err) => {
    if (err) return console.log(err)
    })
})

// 8
fs.mkdir("data/users", {recursive: true}, (err, path) => {
    if (err) {return console.log(err)
    } else if (path) {
        return console.log("Users folder created")
    } else {
        return console.log("Users folder alredy exists")
    }
}
)

// 9
fs.mkdir("data/users", {recursive: true}, (err, path) => {
    if (err) return console.log(err)
    fs.writeFile("data/users/user1.txt", "Name: David, Age: 25", (err) => {
        if (err) return console.log(err)
        console.log("file created successfuly")})
})

// 10
fs.readdir("data", "utf-8", (err, data) => {
    if (err) return console.log(err)
        console.log(data)
});

// 11
fs.mkdir("data", {recursive: true}, (err, path) => {
    if (err) return console.log(err)
        return fs.writeFile("data/step1.txt", "Step 1 completed", (err) => {
        if (err) return console.log(err)
            return fs.writeFile("data/step2.txt", "Step 2 completed", (err) => {
            if (err) return console.log(err)
                return fs.writeFile("data/step3.txt", "Step 3 completed", (err) => {
                if (err) return console.log(err)
                    return console.log("All steps completed")
                });
            });
        });
    });

// 12
fs.readFile("data/step1.txt", "utf-8", (err, data1) => {
    if (err) return console.log(err)
        fs.readFile("data/step2.txt", "utf-8", (err, data2) => {
        if (err) return console.log(err)
            fs.readFile("data/step3.txt", "utf-8", (err, data3) => {
            if (err) return console.log(err)
                console.log(`${data1}\n${data2}\n${data3}`)
            })
        })
    })

// 13
fs.writeFile("data/report-title.txt", "Daily Report", (err) => {
    if (err) console.log(err)
    fs.writeFile("data/report-body.txt", "Everything is working", (err) => {
        if (err) console.log(err)
        fs.readFile("data/report-title.txt", "utf-8", (err, data1) => {
            if (err) return console.log(err);
            fs.readFile("data/report-body.txt", "utf-8", (err, data2) => {
                if (err) return console.log(err);
                const text1 =`${ data1 }\n${ data2 }`;
                fs.writeFile("data/final-report.txt", text1, (err) => {
                    if (err) console.log(err)
                    })
                })
            })
        })
    })

// 14
fs.writeFile("data/original.txt", "Original file content", (err) => {
if (err) return console.log(err);
fs.readFile("data/original.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);
    fs.writeFile("data/copy.txt", data, (err) => {
        if (err) return console.log(err);
        fs.readFile("data/copy.txt", "utf-8", (err, data) => {
            if (err) return console.log(err);
            console.log(data)
        })
    })
})
})

