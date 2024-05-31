#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

// 用于检查入口文件是否正常执行
console.log("my-node-cli working~");
console.log("hello world");

const inquirer = require("inquirer");
const chalk = require("chalk");
const { Command } = require("commander");
const ora = require("ora");
const program = new Command();

// 自定义文本信息
const message = "Loading unicorns";
// 初始化
const spinner = ora(message);
// 开始加载动画
spinner.start();

setTimeout(() => {
  // 修改动画样式

  // Type: string
  // Default: 'cyan'
  // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
  spinner.color = "red";
  spinner.text = "Loading rainbows";

  setTimeout(() => {
    // 加载状态修改
    spinner.stop(); // 停止
    spinner.succeed("Loading succeed"); // 成功 ✔
    // spinner.fail(text?);  失败 ✖
    // spinner.warn(text?);  提示 ⚠
    // spinner.info(text?);  信息 ℹ
  }, 2000);
}, 2000);

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program
  .command("init")
  .description("create app")
  .action((str, options) => {
    console.log("++++++");
    console.log(str);
    console.log("++++++");
    inquirer
      .prompt([
        {
          type: "input", //type： input, number, confirm, list, checkbox ...
          name: "name", // key 名
          message: "Your name", // 提示信息
          default: "my-node-cli", // 默认值
        },
      ])
      .then((answers) => {
        // 打印命令行输入的值
        let { name } = answers;
        console.log(answers);
        // 文本样式
        console.log("project name is " + chalk.bold(name));

        // 颜色
        console.log("project name is " + chalk.cyan(name));
        console.log("project name is " + chalk.green(name));

        // 背景色
        console.log("project name is " + chalk.bgRed(name));

        // 使用RGB颜色输出
        console.log(
          "project name is " + chalk.rgb(4, 156, 219).underline(name)
        );
        console.log("project name is " + chalk.hex("#049CDB").bold(name));
        console.log("project name is " + chalk.bgHex("#049CDB").bold(name));
      });
  });

// program.parse();
