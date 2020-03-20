/*
RustBot for discord
BETA BRANCH CODE NOT FINAL
--Developed by VincetoDorito
--To help development please report issues and submit pull requests
--v1.0beta2 --Developing
*/
//BOT CRITICAL SETTINGS DO NOT CHANGE
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const updatedVersion = "V1.0";
const version = "V1.0 ";
const embed = new Discord.RichEmbed();
//CACHE
var cache1 = ""; //Used for voting
var cache2 = "";
var cache3 = "";
var cache4 = "";
var cache5 = "";
var cache6 = "";
var cache7 = "";
var cache8 = "";
var cache9 = "";
var cache10 = "";
//BOT SETTINGS
const defaultBotStatus = "~help - running version " + version;
var NSWF = "0";
var NSWFContent = "NSWF.txt";
const github = 'https://github.com/VincetoDorito/RustBot'; //Link to the github
const adminRank = "RustBot";//Admin rank check to acsess to admin commands Set this to the rank you want mods to acsess
const supportServer = "0"; //Ultimate control on this server
//Settings FOR PRIVATE HOSTERS
var NSWFContent = "";
var welcome = "Welcome to the server! Please check the rules! For bot help send -help"; //When someone joins this message is sent in a DM
const PREFIX = "~"; //The prefix is what you type before the command            private hosters should change this
const token = process.env.token; //"Password" to bot. The token is put in through heroku                         Set with heroku config vars change that value for your server
const admin = process.env.admin; //Admin username check to acsess to admin commands                         Set with heroku config vars change that value for your server
const hostingMode = "public"; //Change this to private to run more admin control if you are inviting the bot from the official link you will have less control over your bot at the moment
const hostingServer = 'public-heroku'; //Switch this to the name of the hosting/deployment service your using


//Rust Vars
var anounceChnl = "660288525178241045";
var base1 = "";
var base2 = "";

//FUNCTIONS
function forceStop() {
        stop();
    }
//Login Process of Bot
bot.login(token);
bot.on('ready', () =>{
        fs.readFile('NSWF.txt', function (err, data) {
          if (err) throw err;
          if(data.includes('Hello')){
           console.log("Hello");
          }
    });
    console.log('Vinceto Bot is online and running');
    console.log('Running version '+ version);
    console.log('Hosting Mode' + hostingMode)
    bot.user.setActivity(defaultBotStatus);
})
//When a member joins the server, the user gets a message
bot.on('guildMemberAdd', member => {
    message.author.send(welcome); 
});
//Message Action
bot.on('message', message=>{
    //"Rules" for the server
    if(! version === updatedVersion) {
        embed.setTitle('Version')
        message.reply("A new version of the bot is out! Your current version is " + version +" while the updated version is " + updatedVer);
    }
    if(NSWF === "1"){
            /*
          fs.readFile('NSWF.txt', function (err, data) {
          if (err) throw err;
          if(message.includes(data){
           console.log("OOP BAD WORD");
           message.delete(1);
           message.reply("Please dnont post NSFW content")
          }
        });*/
    }else if(NSWF === "0"){
    }else{
            message.reply("ERROR - NSWF NOT DEFINED");
    }  
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'setbase':
            if(args)
        break;
        case 'raid':
            if(message.member.roles.find(r => r.name === adminRank)){
                guild.channels.get(anounceChnl).send("Base" )
            }
        break;
             if (message.guild.name = supportServer) {
                if(message.member.roles.find(r => r.name === adminRank)){
                    bot.user.setActivity(args[1]);
                }
             }
           break;
        case 'updateVer':
             if (message.guild.name = supportServer) {
                if(message.member.roles.find(r => r.name === adminRank)){
                    updatedVer = args[1];
                    message.reply('Updated Version')
                }
             }
           break;
        case 'TESTMENU':
                if (args[1] === "") {

                } else {
                    message.channel.send('ERROR - NO TEST ');
                }
            break;
        case 'hosting':
                message.reply('Server Version - '+ version + "         Hosting Mode - " + hostingMode + '         Deployment service - ' + hostingServer)
        case 'GitHub':
                message.author.send("The github for the bot is at the link below");
                message.author.send(github);
                message.author.send("Please note that the version you are viewing. The version this server is running is " + version);
            break;
        case 'info':
                embed.setTitle('Commands')
                .addField('', '')
                .addField('GitHub', 'run ~GitHub')
                .addField('Version', version)
                .addField('Server', message.guild.name)
                .setColor(0x00c72e)
                message.channel.sendEmbed(embed);
            break;
        case "dev":
                message.channel.sendMessage(admin);
            break;
        case 'ban':
            if (hostingMode === "public") {
                if(admin.includes(message.author.username)) {
                        if(message.member.roles.find(r => r.name === adminRank)){
                            var guild = message.guild;
                            guild.ban(args[1], { days: args[2], reason: args[3] })
                            .then(console.log)
                            .catch(console.error);
                    } else {
                        message.reply("You do not have permission to run that command     ERROR: TEST 2 FAILED");
                    }
                }else {
                    message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                }
            } else if (hostingMode === "private") {
                        if(message.member.roles.find(r => r.name === adminRank)){
                            var guild = message.guild;
                            guild.ban(args[1], { days: args[2], reason: args[3] })
                            .then(console.log)
                            .catch(console.error);
                }else {
                    message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                }
            } else {
                message.channel.sendMessage("FATAL ERROR - HOSTING MODE NOT DETECTED")
            }
            break;
        case 'NSWF':
            let adminRole = message.guild.roles.find("name", "Admin");
            let modRole = message.guild.roles.find("name", "Mod");
            var server = message.guild;
            var name = message.author.username;
            if (args[1] === "on"){
                    if (hostingMode === "public") {
                        if(admin.includes(message.author.username)) {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                    NSWF = "1"
                            } else {
                                message.reply("You do not have permission to run that command     ERROR: TEST 2 FAILED");
                            }
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else if (hostingMode === "private") {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                    NSWF = 0;
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else {
                        message.channel.sendMessage("FATAL ERROR - HOSTING MODE NOT DETECTED")
                    }
            }else if(args[1] === "off"){
                if (hostingMode === "public") {
                        if(admin.includes(message.author.username)) {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                    NSWF = "0"
                            } else {
                                message.reply("You do not have permission to run that command     ERROR: TEST 2 FAILED");
                            }
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else if (hostingMode === "private") {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                   NSWF = "0";
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else {
                        message.channel.sendMessage("FATAL ERROR - HOSTING MODE NOT DETECTED")
                    }
            }else {
                message.reply("You can only use on and off as the seccond argument");
            }
            break;
            case 'createChannel':
                    if (hostingMode === "public") {
                        if(admin.includes(message.author.username)) {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                    var guild = message.guild;
                                    guild.createChannel(args[1], { type: 'text' })
                                    .then(console.log)
                                    .catch(console.error);
                            } else {
                                message.reply("You do not have permission to run that command     ERROR: TEST 2 FAILED");
                            }
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else if (hostingMode === "private") {
                                if(message.member.roles.find(r => r.name === adminRank)){
                                    var guild = message.guild;
                                    guild.createChannel(args[1], { type: 'text' })
                                    .then(console.log)
                                    .catch(console.error);
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }
                    } else {
                        message.channel.sendMessage("FATAL ERROR - HOSTING MODE NOT DETECTED")
                    }
                        /*if(admin.includes(message.author.username)) {
                            //if(message.member.highestRole.includes(adminRank)) {
                                if(message.member.roles.find(r => r.name === "Owner")){

                                    var guild = message.guild;
                                    //server.createChannel('channel', "test");
                                    guild.createChannel(args[1], { type: 'text' })
                                    .then(console.log)
                                    .catch(console.error);
                            } else {
                                message.reply("You do not have permission to run that command     ERROR: TEST 2 FAILED");
                            }
                        }else {
                            message.reply("You do not have permission to run that command     ERROR: TEST 1 FAILED");
                        }*/
            break;
        case 'nuke':
                setTimeout(function nuke() {
                    message.channel.sendMessage('TACTICAL NUKE DEPLOYED');
                    message.channel.sendMessage('IMPACT IN 5');
                    console.log('a channels messages are being deleted by ' + message.author.username);
                    //wait(1000);
                    message.channel.sendMessage('4');
                    //wait(1000);
                    message.channel.sendMessage('3');
                    //wait(1000);
                    message.channel.sendMessage('2');
                    //wait(1000);
                    message.channel.sendMessage('1');
                    //wait(1000);
                    message.channel.sendMessage('BOOM');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');
                    message.channel.bulkDelete('100');

                }, 1000)
            break;
        case 'ping':
                message.reply('pong');
            break;
        case 'vote':
                /*var votingChannel = args[1];
                channelVotes1 = channelVotes1 + 1;
                console.log(newChannel1);
                console.log(channelVotes1);
                message.reply(newChannel);
                message.channel.sendMessage("@everyone channel args[1]");*/
                message.channel.sendMessage("@Staff user " + message.author.username +" voted for there to be a " + args[1] + " channel")
            break;
        case 'clear':
                if(!args[1]) return message.replymessage.reply(newChannel);('Define how many lines to delete')
                message.channel.bulkDelete(args[1]);
            break;
        case 'User':
                embed.setTitle('User')
                .addField("Username", message.author.username)
                .addField('Server', message.guild.name)
                .setColor(0x00c72e)
                message.channel.sendEmbed(embed);
            break;
        case 'gay':
                message.channel.sendMessage(args[1]+" is gay");
            break;
        case 'help':
                embed.setTitle('Help')
                .addField('','')
                .setColor(0x00c72e)
                message.channel.sendEmbed(embed);
            break;
        
        case 'test':
                message.channel.sendMessage("hello");
            break;
        
    }
})
