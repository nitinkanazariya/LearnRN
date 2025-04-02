import { formatDateTime, numberToWords } from "./Custom";

export const HtmlContent = (userDetails, items) => {
  const Html = `
  <html>
  <head>
    <style>
      @page {
        size: A4 landscape;
      }
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      .container {
        display: flex;
        width: 100%;
        height: 100%;
      }
      .section {
        border: 2px solid rgb(146, 35, 35);
        width: 46%;
        box-sizing: border-box;
        height: auto;
        overflow: hidden;
        page-break-inside: avoid;
      }
      .items-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      }
      .items-table th,
      .items-table td {
        border: 1px solid rgb(146, 35, 35);
        padding: 5px;
        text-align: left;
        word-wrap: break-word;
        margin-left: -10px;
      }
      .items-table th {
        background-color: #f2f2f2;
      }
      .container {
        height: 100%
      }
      .section .items-table {
        font-size: 10px;
      }
      .items-table th,
      .items-table td {
        font-size: 10px;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="section" style="margin-left: 30px ">
      <div style="background:rgb(146, 35, 35); height: 170px;">
        </div>
        <p
          style="font-size: 12px; font-weight: 900; letter-spacing: 1px; background: #faf884;text-align: center;margin-top: 0;padding:2px;">
          ૨૦૩,
          શાશ્વત મોલ, શુભ
          કોમ્પ્લેક્સ ની બાજુ માં,
          બોટાદ-૩૬૪૭૧૦</p>
          <div style="display: flex; flex-direction: row; justify-content:space-between; padding-left: 5px;margin-top: -21px;;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px;  color: rgb(146, 28, 28);">નામ</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.name}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 50%;">
            <p style="font-weight: bold; font-size: 12px;  color:rgb(146, 28, 28);">બિલ નં.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 67%;margin-left: 5px; padding-left: 5px ;line-height: 10px;  font-size: 15px;font-weight: 800;">
      ${userDetails.billNo}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">અડ્રેસ</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.addresh}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 60%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બુકિંગ તા.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 65%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${formatDateTime(userDetails.bookingDate)}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">મો.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 100%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.phone1}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">મો.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 88%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.phone2}</p>
          </div>
        </div>
        <div style="border-bottom: 1px solid; margin-left: -20px; margin-right: -20; border-color: rgb(146, 35, 35);">
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -5px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">લઈ જવાની તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 57%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.laiJavaNiDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">ટોટલ ભાડુ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.TotalBhadu + '.00/-'}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">ભાડુ તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.bhaduDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">એડવાન્સ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 72%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.advance + '.00/-'}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">પાછી આપવાની તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 50%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.pachiAapvaniDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બાકી ભાડુ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
          ${userDetails.bakiBhadu < 0 ? Math.abs(userDetails.bakiBhadu) + '.00/-  ' + " ( જમા ) " : userDetails.bakiBhadu + '.00/-'}</p>
          </div>
        </div>
        <table class="items-table" style="margin-top: -10px; ">
          <thead>
            <tr>
              <th style="width: 5%; text-align: center; border-left: 0; ">ક્રમ</th>
              <th style=" text-align: center; ">વિગત</th>
              <th style="width: 5%; text-align: center; ">નંગ</th>
              <th style="width: 10%; text-align: center; ">ભાવ</th>
              <th style="width: 10%; text-align: center;border-right: 0; ">રકમ</th>
            </tr>
          </thead>
          <tbody>
           ${items.map((item, index) => {
    return `
              <tr>
                <td style="text-align: center; border-left: 0;">${index + 1}</td>
                <td>${item.name}</td>
                <td style="text-align: center;">${item.itemCount == 0 ? '' : item.itemCount}</td>
                <td style="text-align: center;">${item.price == 0 ? '' : item.price}</td>
                <td style="text-align: center; border-right: 0;">${item.itemCount * item.price == 0 ? '' : item.itemCount * item.price}</td>
              </tr>
            `;
  }).join('')}
  
          </tbody>
          <tr>
              <td colspan="3" style="text-align: left; font-weight: bold;line-height: 5px; border-left: 0; padding-left: 10px">
              ${numberToWords(userDetails.TotalBhadu)}
              </td>
              <td style="text-align: center; font-weight: bold;">ટોટલ </td>
              <td style="text-align: center; font-weight: bold; border-right: 0;">
               ${userDetails.TotalBhadu + ".00/-"}
              </td>
            </tr>
        </table>
          <p
          style="font-weight: bold;font-size: 8px; background: rgb(146, 35, 35); margin-top: 0;text-align: center; color: white;padding: 2px;letter-spacing: 1;">
          (૧)ડિપોઝિટ ભાડુ ડિલિવરી
          લેવા આવો ત્યારે
          ફરજીયાત લાવવુ <span style="margin-left: 5px;"> </span>(ર)કારણ ગમે તે
          હોય એડવાન્સ રીટર્ન મળશે નહી. </p>
        <p style="font-size: 11px; font-weight: bold;color:rgb(146, 35, 35);padding-left: 5px;line-height: 18px;margin-top: -5px;">
          (૧) <span style="margin-left: 3px;"></span>બુકિંગ કરાવેલ ટ્રે કૅન્સલ કે તેમા ફેરફાર થશે નહિ.<br>
          (ર) <span style="margin-left: 3px;"></span> કોઈ પણ ટ્રે માં ડેમેજ થાય તો તેનો ચાર્જ અલગ થી લેવા મા આવશે.<br>
          (3) <span style="margin-left: 3px;"></span> ટ્રે ની રીટર્ન તારીખ, સમય થી લેટ આપનાર પાસે ડબલ ભાડુ લેવા મા
          આવશે.<br>
        </p>
      </div>
  
  
  
  
  
  
  
  
  
  
  
  
      <div class="section" style="margin-left: 30px ">
      <div style="background:rgb(146, 35, 35); height: 170;">
  
        </div>
        <p
          style="font-size: 12px; font-weight: 900; letter-spacing: 1px; background: #faf884;text-align: center;margin-top: 0;padding:2px;">
          ૨૦૩,
          શાશ્વત મોલ, શુભ
          કોમ્પ્લેક્સ ની બાજુ માં,
          બોટાદ-૩૬૪૭૧૦</p>
          <div style="display: flex; flex-direction: row; justify-content:space-between; padding-left: 5px;margin-top: -21px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px;  color: rgb(146, 28, 28);">નામ</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.name}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 50%;">
            <p style="font-weight: bold; font-size: 12px;  color:rgb(146, 28, 28);">બિલ નં.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 67%;margin-left: 5px; padding-left: 5px ; line-height: 10px;  font-size: 15px;font-weight: 800;">
      ${userDetails.billNo}</p>
          </div>
        </div>
  
  
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">અડ્રેસ</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 85%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.addresh}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 60%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બુકિંગ તા.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 65%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${formatDateTime(userDetails.bookingDate)}</p>
          </div>
        </div>
  
  
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">મો.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 100%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${userDetails.phone1}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">મો.</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 88%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.phone2}</p>
          </div>
        </div>
        <div style="border-bottom: 1px solid; margin-left: -20px; margin-right: -20; border-color: rgb(146, 35, 35);">
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -5px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">લઈ જવાની તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 57%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.laiJavaNiDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">ટોટલ ભાડુ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.TotalBhadu + '.00/-'}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">ભાડુ તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.bhaduDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">એડવાન્સ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 72%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.advance + '.00/-'}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content:space-between; margin-top: -15px;  padding-left: 5px;
         padding-right: 10px;">
          <div style="flex-direction: row; display: flex;width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color: rgb(146, 28, 28);">પાછી આપવાની તા:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 50%;margin-left: 5px; padding-left: 5px ; font-size: 12px; font-weight: bold;color: black;">
      ${formatDateTime(userDetails.pachiAapvaniDate)}</p>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%;">
            <p style="font-weight: bold; font-size: 12px; color:rgb(146, 28, 28);">બાકી ભાડુ:-</p>
            <p
              style="border-bottom: 1px solid; border-color: rgb(146, 28, 28); width: 71%;padding-left: 5px;margin-left: 5px;  font-size: 12px; font-weight: bold;">
      ${userDetails.bakiBhadu < 0 ? Math.abs(userDetails.bakiBhadu) + '.00/-  ' + " ( જમા ) " : userDetails.bakiBhadu + '.00/-'}</p>
          </div>
  
        </div>
       
        <table class="items-table" style="margin-top: -10px; ">
          <thead>
            <tr>
              <th style="width: 5%; text-align: center; border-left: 0; ">ક્રમ</th>
              <th style=" text-align: center; ">વિગત</th>
              <th style="width: 5%; text-align: center; ">નંગ</th>
              <th style="width: 10%; text-align: center; ">ભાવ</th>
              <th style="width: 10%; text-align: center;border-right: 0; ">રકમ</th>
            </tr>
          </thead>
          <tbody>
           ${items.map((item, index) => {
    return `
              <tr>
                <td style="text-align: center; border-left: 0;">${index + 1}</td>
                <td>${item.name}</td>
                <td style="text-align: center;">${item.itemCount == 0 ? '' : item.itemCount}</td>
                <td style="text-align: center;">${item.price == 0 ? '' : item.price}</td>
                <td style="text-align: center; border-right: 0;">${item.itemCount * item.price == 0 ? '' : item.itemCount * item.price}</td>
              </tr>
            `;
  }).join('')}
  
          </tbody>
          <tr>
              <td colspan="3" style="text-align: left; font-weight: bold;line-height: 5px; border-left: 0; padding-left: 10px">
              અંકે રૂપિયા <span style="margin-left: 10px;"> ${numberToWords(userDetails.TotalBhadu)}</span>
              </td>
              <td style="text-align: center; font-weight: bold;">ટોટલ </td>
              <td style="text-align: center; font-weight: bold; border-right: 0;">
               ${userDetails.TotalBhadu + ".00/-"}
              </td>
            </tr>
        </table>
          <p
          style="font-weight: bold;font-size: 8px; background: rgb(146, 35, 35); margin-top: 0;text-align: center; color: white;padding: 2px;letter-spacing: 1;">
          (૧)ડિપોઝિટ ભાડુ ડિલિવરી
          લેવા આવો ત્યારે
          ફરજીયાત લાવવુ <span style="margin-left: 5px;"> </span>(ર)કારણ ગમે તે
          હોય એડવાન્સ રીટર્ન મળશે નહી. </p>
        <p style="font-size: 11px; font-weight: bold;color:rgb(146, 35, 35);padding-left: 5px;line-height: 18px;margin-top: -5px;">
          (૧) <span style="margin-left: 3px;"></span>બુકિંગ કરાવેલ ટ્રે કૅન્સલ કે તેમા ફેરફાર થશે નહિ.<br>
          (ર)<span style="margin-left: 3px;"></span> કોઈ પણ ટ્રે માં ડેમેજ થાય તો તેનો ચાર્જ અલગ થી લેવા મા આવશે.<br>
          (3)<span style="margin-left: 3px;"></span> ટ્રે ની રીટર્ન તારીખ, સમય થી લેટ આપનાર પાસે ડબલ ભાડુ લેવા મા
          આવશે.<br>
  
        </p>
      </div>
    </div>
  </body>
  
  </html>
  `
  return Html
}