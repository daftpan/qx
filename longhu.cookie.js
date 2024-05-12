if ($request && $request.method === 'OPTIONS') return;

const header = ObjectKeys2LowerCase($request.headers);
if (!header.cookie) throw new Error("获取Cookie错误，值为空");

const newData = {
    "userName": '微信用户',
    'x-lf-dxrisk-token': header['x-lf-dxrisk-token'],
    "x-lf-channel": header['x-lf-channel'],
    "token": header.token,
    'x-lf-usertoken': header['x-lf-usertoken'],
    "cookie": header.cookie,
    "x-lf-bu-code": header['x-lf-bu-code'],
    'x-lf-dxrisk-source': header['x-lf-dxrisk-source']
}
const index = userCookie.findIndex(e => e.token == newData.token);
index !== -1 ? userCookie[index] = newData : userCookie.push(newData);
$.setjson(userCookie, ckName);
$.msg($.name, `🎉获取Cookie成功!`, ``)
