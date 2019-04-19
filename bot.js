const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === "$help") {
    let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **-$ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **-$mute** ' ,' **سرعة إتصال البوت** ')
.addField('     **-$unmute** ' ,' **سرعة إتصال البوت** ')
.addField('     **-$id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **-$say** ' , '**يكرر الكلام الذي تقولة**')
.addField('     **-$info** ' ,' ** معلومات عن السيرفر**')
.addField('     **-$avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **معلومة** ' , '**لإظهار معلومة عشوائية**')
.addField('     **لإظهار بعض صور الحيوانات** ' ,' **حيوانات ** ')
.addField('     ** ** ' ,' ** ** ')
.addField('     ** ** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **-$kick ** ' ,' ** للطرد  ** ')
.addField('     **-$bc ** ' ,' ** للبرودكاست ** ')
.addField('     **-$clear** ' , '**لـ مسح الشات** ')
.addField('     **-$roles** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('     **-$avatar** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('     **-$server** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('     **-$invite** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('     **-$bot** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('     **-$rooms** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**POWER DZ YT**')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/oauth2/authorize?client_id=532198841827590154&permissions=888899988&scope=bot**')
.setColor('RANDOM')
 message.channel.sendEmbed(embed);
   }
});

client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "$$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
       return message.reply("** تم اعطاء العضو المحدد ميوت  **").catch(console.error);
    } else {
      message.guild.member(user).addRole(muteRole).then(() => {
        return message.reply("** تم اعطاء العضو المحدد ميوت كتابي .. **").catch(console.error);
      });
    }
   
  };
   
  });

  client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "$$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).removeRole(muteRole.id)) {
        return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
    } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
        return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
      });
    }
   
  };
   
  });





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });



client.on('message', message => {
    if (message.content.startsWith("$invite")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`لقد دعوت  ${invites.find(invite => invite.inviter.id === message.author.id).uses} عضو لهاذا السيرفر`))
     
    }
});


client.on('message', message => {
  if (message.content === "$id") {
  let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(message.author.avatarURL)
 .addField("Name:",`${message.author.username}`, true)
 .addField('Discrim:',"#" +  message.author.discriminator, true)
 .addField("ID:", message.author.id, true)
 .addField("Create At:", message.author.createdAt, true)
    
    
 message.channel.sendEmbed(embed);
   }
  });
  client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
       return message.reply("** تم اعطاء العضو المحدد ميوت  **").catch(console.error);
    } else {
      message.guild.member(user).addRole(muteRole).then(() => {
        return message.reply("** تم اعطاء العضو المحدد ميوت كتابي .. **").catch(console.error);
      });
    }
   
  };
   
  });
  
  client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).removeRole(muteRole.id)) {
        return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
    } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
        return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
      });
    }
   
  };
   
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("https://imrkboosh.sarahah.com",{type: 'WATCHING'});
   
  });

  client.on('message', message => {
    if (message.content === '$roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberAdd', member => {
  var embed = new Discord.RichEmbed()
  .setThumbnail(member.user.avatarURL)
.addField("***شكرا الانضمامك الينا***" ,member.user.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setColor('RANDOM')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'chat-arabjoker')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("๖ۣۜⓁ𝓚༻VISITORS","๖ۣۜⓁ𝓚༻VISITORS"));
  });

 var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


var prefix = "$bc";
client.on("message", message => {

            if (message.content.startsWith(prefix + "$bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : POWER DZ YT`);
        console.log(`----------------`);
    console.log(`ON ${client.guilds.size} Servers ' Script By : POWER DZ YT' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`your life is the biggest foe`,"https://www.twitch.tv/ledom999")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "$kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**https://cdn.discordapp.com/attachments/498625534549295114/498825358682882059/kick_metion.png**");
  if(!reason) return message.reply ("**https://cdn.discordapp.com/attachments/498625534549295114/498825956983701514/kick_reson.png**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**This User Is Have High Role**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

 
client.on('message', message => {
  if (message.content === "$roles") {
      var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField('الرتب:',`**[${roles}]**`)
      message.channel.sendEmbed(embed);
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله***, ${member}`);
 
});
 
client.on('message', message => {
  if (message.content === "^^bot") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
  let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
.addField("**المستخدمين:**", client.users.size)
.addField("**قنوات:**", client.channels.size)
.setTimestamp()
message.channel.sendEmbed(embed);
 }
});


client.on('message', message => {
  if (message.content === "$bot") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
  let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
.addField("**المستخدمين:**", client.users.size)
.addField("**قنوات:**", client.channels.size)
.setTimestamp()
message.channel.sendEmbed(embed);
 }
});

client.on('message', message => {
  if (message.content === "$rooms") {
                    if (!message.guild) return;

      var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
      .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
     
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
      message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  if (message.content === "$server") {
      if (!message.channel.guild) return
      var verificationLevel = message.guild.verificationLevel;
      const verificationLevels = ['None','Low','Meduim','High','Extreme'];
      var Y1 = message.guild.createdAt.getFullYear() - 2000
      var M2 = message.guild.createdAt.getMonth()
      var D3 = message.guild.createdAt.getDate()
      const xNiTRoZ = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setColor('RANDOM')
       .setTimestamp()
       .setTitle(message.guild.name,message.guild.iconURL)
       .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
       .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)            
       .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            
       .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
       .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
       .addField(':earth_asia: الدوله',message.guild.region)
       .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
       .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
       .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
       message.channel.send({embed:xNiTRoZ});
   }
  });

  client.on('message', (message) => {
    if (message.content.startsWith('$ban')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});

client.on('message', (message) => {
  if (message.content.startsWith('$kick')) {
      var member= message.mentions.members.first();
      member.kick().then((member) => {
          message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
      }).catch(() => {
          message.channel.send(":x:");
      });
  }
});

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});

client.on('message', message => {
  if (message.content.startsWith("$avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
       
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});


  });

client.login("BOT_TOKEN")
