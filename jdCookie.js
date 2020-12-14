/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'retina=0; cid=9; webp=1; __jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1606713971760; mba_muid=16067139717581666874158; visitkey=54022162574555530; shshshfp=8054dec7a35b1e1d66375e2d17ce1a9e; shshshfpa=4a01f3cd-339b-15c9-2c56-ac309a5895cc-1606713985; 3AB9D23F7A4B3C9B=ANYWMO4QKWCLUY7IYELIIRJWGZYGCCFCMOEM5VS4ELVWMR66D3FIHA5OUHJKYZLZY5EUUGWYLLHVHWCYGKFH44IHSI; shshshfpb=bsV4DmKdyvkZYDA%2BTi5H7mg%3D%3D; jcap_dvzw_fp=1ab9c6cba37dabf72baeda88dda35243$919779926011; TrackerID=9pgePUsV2jLU8j-85VgigBiSaI1mvuXmh2JZDLzpmuh7yrVUZByfOzcVk86nPaPd-s8DQit3i7MyD7W_K7vOfYmGWm01zqdfdDIUL0yV1MBMqxOdDG7R4H6OaXFKDV-w; pt_key=AAJfxIKpADDv7PieAXNcg9KnkbMhuBCVksCAlTye6WmcriDNsFG0n9HpFb8pMoYYSUpzD8yddHk; pt_pin=reus; pt_token=hmu9bgys; pwdt_id=reus; whwswswws=; wxa_level=1; wqmnx1=MDEyNjM5Ni9tMTVhY0kgMGUzVCBoMCAzMzQyS0VGKCU%3D; jxsid=16076521754098398983; __jda=122270672.16067139717581666874158.1606713971.1606713971.1607652175.2; __jdb=122270672.1.16067139717581666874158|2.1607652175; __jdc=122270672; mba_sid=16076521758909577067586842422.1; __jd_ref_cls=MHome_BIcons',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
