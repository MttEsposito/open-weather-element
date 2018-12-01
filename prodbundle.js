const nameFile = "weather-element.min.js";
const outputPath = `${__dirname}/element/dist`;

const fs = require('fs');
const fsExtra = require('fs-extra');
const concat = require('concat');

const bundle = () => {
    console.log('*** START BUNDLE JS ***');
    removeFolder()
        .then(removed => {
            console.log('{0} - Folder removed !');
            getFileProd()
                .then(files => {
                    console.log('{1} - File array created !');
                    concat(files)
                        .then(output => {
                            console.log('{2} - File concatenated !');
                            makeOutputFile(output)
                        })
                })
        })
        .catch(err => console.error(err));
}

const makeOutputFile = (file) => {
    const min = file.replace(/\n/g, ''); 
    createFolder()
        .then(folder => {
            console.log('{3} - Created folder output !');
            createFile(min, folder);
        })
        .catch(err => console.error(err))
}

const createFile = (file, folder) => {
    fs.writeFile(`${folder}/${nameFile}`, file, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('{4} - Output file generated !');
            console.log('*** END BUNDLE JS ***');
        }
    })
}

const createFolder = () => {
    return new Promise((resolve, reject) => {
        fsExtra.mkdirs(outputPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(outputPath);
            }
        })
    })
}

const removeFolder = () => {
    return new Promise((resolve, reject) => {
        fsExtra.remove(outputPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Folder removed !');
            }
        })
    })
}

const getFileProd = () => {
    return new Promise((resolve, reject) => {
        const folder = `${__dirname}/dist/weather-element`;
        fs.readdir(folder, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(orderedFiles(files, folder));
            }
        })
    })
}

const orderedFiles = (files, folder) => {
    let output = [1, 2, 3, 4];
    for (const file of files) {
        if (file.includes('.js')) {
            const name = file.substring(0, file.indexOf('.'));
            switch (name) {
                case 'runtime':
                    output[0] = `${folder}/${file}`;
                    break;
                case 'polyfills': {
                    output[1] = `${folder}/${file}`;
                    break;
                }
                case 'scripts': {
                    output[2] = `${folder}/${file}`;
                    break;
                }
                case 'main': {
                    output[3] = `${folder}/${file}`;
                    break;
                }
                default: {
                    console.error('ERROR !');
                    break;
                }
            }
        }
    }
    return output;
}

bundle();