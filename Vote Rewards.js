module.exports = [{
    name: "$alwaysExecute",
    code: `$if[$checkContains[$toLowercase[$day[yes]];saturday;sunday;friday]==true]
$sendDM[$get[user];**Thanks for voting at $get[list2]**!

You have received **300**$getVar[ecosign] for voting!]
$elseif[$checkContains[$toLowercase[$day[yes]];saturday;sunday;friday]==false]
$sendDM[$get[user];**Thanks for voting at $get[list2]**!

You have received **150**$getVar[ecosign] for voting!]
$endelseif
$endif

$let[list2;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];ibl;Infinity Bot List];bfd;Bots For Discord];tc;Top Cord];dl;Discord Bot Labs];vb;Void Bots];bls;Bot List.space];abl;Astro Bot List];bbl;Blade Bot List];dbl;Discord Bot List]
$let[list;$messageSlice[1]]
$let[user;$message[1]]
$onlyIf[$authorID!=$clientID;]
$onlyForChannels[832878919018741760;]`,
nonPrefixed: true
}]
