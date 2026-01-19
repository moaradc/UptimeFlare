// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "MOARA 的状态页",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'mailto:moara@foxmail.com', label: '邮箱' },
    { link: 'https://blog.945426.xyz/', label: '博客' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // HTTP 监控示例
    // {
    //   // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
    //   id: 'blog',
    //   // `name` 用于状态页面和回调消息
    //   name: '博客',
    //   // `method` 应该是有效的 HTTP 方法
    //   method: 'HEAD',
    //   // `target` 是一个有效的 URL
    //   target: 'https://blog.acofork.com/',
    //   // [可选] `tooltip` 仅用于在状态页面显示提示信息
    //   //tooltip: '这是此监控的提示信息',
    //   // [可选] `statusPageLink` 仅用于状态页面的可点击链接
    //   statusPageLink: 'https://blog.acofork.com/',
    //   // [可选] `hideLatencyChart` 如果设置为 true，将隐藏状态页面的延迟图表
    //   hideLatencyChart: false,
    //   // [可选] `expectedCodes` 是可接受的 HTTP 响应代码数组，如果不指定，默认为 2xx
    //   expectedCodes: [200],
    //   // [可选] `timeout` 以毫秒为单位，如果不指定，默认为 10000
    //   timeout: 10000,
    //   // [可选] 要发送的头部信息
    //   //headers: {
    //   //  'User-Agent': 'Uptimeflare',
    //   //  Authorization: 'Bearer YOUR_TOKEN_HERE',
    //   //},
    //   // [可选] 要发送的正文
    //   //body: 'Hello, world!',
    //   // [可选] 如果指定，响应必须包含关键字才被视为正常
    //   //responseKeyword: 'success',
    //   // [可选] 如果指定，响应必须不包含关键字才被视为正常
    //   //responseForbiddenKeyword: 'bad gateway',
    //   // [可选] 如果指定，检查将在您指定的区域运行，
    //   // 设置此值之前请参考文档 https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup
    //   //checkLocationWorkerRoute: 'https://xxx.example.com',
    // },
    {
      id: 'status',
      name: '本监控站点',
      method: 'HEAD',
      target: 'https://status.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'MOARA-Blog-Netlify',
      name: '主博客节点 (Netlify)',
      method: 'HEAD',
      target: 'https://blog.945426.xyz/favicon.jpg',
      statusPageLink: 'https://blog.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'MOARA-Blog-Vercel',
      name: '备用博客节点 (Vercel)',
      method: 'HEAD',
      target: 'https://blog2.945426.xyz/favicon.jpg',
      statusPageLink: 'https://blog2.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'cors',
      name: 'CORS API 中转代理服务 ',
      method: 'HEAD',
      target: 'https://cors.945426.xyz/',
      statusPageLink: 'https://cors.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lddc-pages',
      name: 'LDDC API Pages',
      method: 'HEAD',
      target: 'https://lddcapi.945426.xyz/',
      statusPageLink: 'https://lddcapi.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lddc',
      name: 'LDDC API（zeabur节点）',
      method: 'HEAD',
      target: 'https://lddc.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lddc2',
      name: 'LDDC API（leapcell节点）',
      method: 'HEAD',
      target: 'https://lddc.945426.xyz/',
      statusPageLink: 'https://lddc.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'pansou',
      name: '盘搜（ClawCloud）',
      method: 'HEAD',
      target: 'https://ps.945426.xyz/',
      statusPageLink: 'https://ps.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'pan',
      name: 'Cloudreve （zeabur）',
      method: 'GET',
      target: 'https://pan.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'tv',
      name: 'LunaTV（zeabur）',
      method: 'HEAD',
      target: 'https://tv.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'waline',
      name: 'Waline 评论系统',
      method: 'HEAD',
      target: 'https://waline.945426.xyz/',
      statusPageLink: 'https://waline.945426.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'test',
      name: 'test',
      method: 'HEAD',
      target: 'https://worker.521116.xyz/',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    }
  ],
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    /*
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.resend.com/emails',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      method: 'POST',
      // [Optional] headers to be sent
      headers: {
         'Authorization': 'Bearer ${env.RESEND_API_KEY}',
         'Content-Type': 'application/json'
      },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'json',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        "from": "系统状态更新 <status@update.945426.xyz>",
        "to": ["moara@foxmail.com"],
        "subject": "UptimeFlare 状态更新",
        "text": "$MSG"
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    */
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    //gracePeriod: 5,
  },
  callbacks: {
     onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 当任何监控的状态发生变化时，将调用此回调
      // 在这里编写任何 Typescript 代码
      // 调用 Resend API 发送邮件通知 (Neo-Brutalism 风格)
      if (env.RESEND_API_KEY) {
        try {
          const statusText = isUp ? '恢复正常 (UP)' : '服务中断 (DOWN)';
          const statusTitle = isUp ? 'ONLINE' : 'OFFLINE';
          
          // 提取 403.html 中的配色方案
          const neoGreen = '#a3e635'; // 恢复/正常
          const neoPink = '#f472b6';  // 错误/中断
          const neoYellow = '#facc15';
          const accentColor = isUp ? neoGreen : neoPink;
          
          const subject = `[${statusTitle}] ${monitor.name} 站点状态变更`;
          
          // 格式化时间
          let timeString = new Date(timeNow * 1000).toISOString();
          try {
            timeString = new Date(timeNow * 1000).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
          } catch (e) { }

          // --- 新增逻辑：尝试从 reason 中提取状态码 ---
          // 默认情况：正常是200，错误默认500
          let bigStatusCode = isUp ? '200' : '500'; 
          
          if (!isUp) {
            // 正则匹配 "Got: 530" 或 "status: 404" 等数字
            const codeMatch = reason.match(/Got:\s*(\d+)/i) || reason.match(/status:\s*(\d+)/i);
            if (codeMatch && codeMatch[1]) {
              bigStatusCode = codeMatch[1];
            }
          }
          // ------------------------------------------

          // 构建 Neo-Brutalism 风格的 HTML
          const htmlContent = `
            <!DOCTYPE html>
            <html>
            <body style="margin: 0; padding: 20px; background-color: #f0f0f0; font-family: 'Courier New', Courier, monospace; color: #000000;">
              
              <!-- Main Container -->
              <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border: 2px solid #000000; box-shadow: 6px 6px 0px 0px #000000;">
                
                <!-- Window Header (Traffic Lights) -->
                <div style="background-color: #000000; padding: 10px 15px; border-bottom: 2px solid #000000; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 10px; height: 10px; background-color: #ef4444; border-radius: 50%; border: 1px solid #ffffff; margin-right: 6px;"></span>
                  <span style="display: inline-block; width: 10px; height: 10px; background-color: #eab308; border-radius: 50%; border: 1px solid #ffffff; margin-right: 6px;"></span>
                  <span style="display: inline-block; width: 10px; height: 10px; background-color: #22c55e; border-radius: 50%; border: 1px solid #ffffff; margin-right: 15px;"></span>
                  <span style="color: #ffffff; font-family: monospace; font-size: 12px; letter-spacing: 1px; font-weight: bold;">MONITOR_LOG.EXE</span>
                </div>

                <!-- Content Area -->
                <div style="padding: 30px 20px; text-align: center;">
                  
                  <!-- Icon Circle -->
                  <div style="width: 60px; height: 60px; margin: 0 auto 20px auto; background-color: ${accentColor}; border: 2px solid #000000; border-radius: 50%; text-align: center; line-height: 60px; font-size: 30px; font-weight: bold;">
                    ${isUp ? '✔' : '!'}
                  </div>

                  <!-- Big Status Title (Dynamic Code) -->
                  <h1 style="font-family: sans-serif; font-size: 48px; font-weight: 900; margin: 0; line-height: 1; letter-spacing: -2px; text-transform: uppercase;">
                    ${bigStatusCode}
                  </h1>
                  
                  <!-- Tag -->
                  <div style="display: inline-block; background-color: #000000; color: ${isUp ? neoGreen : neoYellow}; padding: 4px 12px; font-family: monospace; font-weight: bold; font-size: 14px; transform: rotate(-2deg); margin: 10px 0 30px 0;">
                    ${statusTitle}
                  </div>

                  <!-- Terminal Box -->
                  <div style="background-color: #f3f4f6; border: 2px dashed #d1d5db; padding: 15px; text-align: left; font-family: monospace; font-size: 12px; margin-bottom: 25px;">
                    <p style="margin: 5px 0;">> 目标: <strong>${monitor.name}</strong></p>
                    <p style="margin: 5px 0;">> 状态: <span style="color: ${isUp ? '#15803d' : '#be185d'}; font-weight: bold;">${statusText}</span></p>
                    <p style="margin: 5px 0;">> 时间: ${timeString}</p>
                    <p style="margin: 5px 0; word-break: break-all;">> 原因: ${reason}</p>
                  </div>

                  <!-- Action Button -->
                  <a href="https://status.945426.xyz/" style="display: block; text-decoration: none; background-color: ${accentColor}; color: #000000; border: 2px solid #000000; padding: 12px; font-weight: 800; font-family: sans-serif; text-transform: uppercase; box-shadow: 4px 4px 0px 0px #000000;">
                    查看监控详情
                  </a>

                </div>

                <!-- Footer Strip -->
                <div style="border-top: 2px solid #000000; background-color: #f9fafb; padding: 8px 15px; font-family: monospace; font-size: 10px; font-weight: bold; color: #6b7280; display: flex; justify-content: space-between;">
                  <span style="float: left;">Uptimeflare</span>
                  <div style="clear: both;"></div>
                </div>

              </div>
            </body>
            </html>
          `;

          const resendPayload = {
            from: "系统状态更新 <status@update.945426.xyz>",
            to: ["moara@foxmail.com"],
            subject: subject,
            html: htmlContent,
          };

          const resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(resendPayload)
          });

          if (!resp.ok) {
            console.error(`Resend API call failed: ${resp.status} ${await resp.text()}`);
          }
        } catch (e) {
          console.error(`Error calling Resend API: ${e}`);
        }
      }
      
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 如果任何监控有正在进行的事件，此回调将每分钟调用一次
      // 在这里编写任何 Typescript 代码


    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// const maintenances: MaintenanceConfig[] = [
//   {
    // // [Optional] Monitor IDs to be affected by this maintenance
    // monitors: ['foo_monitor', 'bar_monitor'],
    // // [Optional] default to "Scheduled Maintenance" if not specified
    // title: 'Test Maintenance',
    // // Description of the maintenance, will be shown at status page
    // body: 'This is a test maintenance, server software upgrade',
    // // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    // start: '2020-01-01T00:00:00+08:00',
    // // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // // if not specified, the maintenance will be considered as on-going
    // end: '2050-01-01T00:00:00+08:00',
    // // [Optional] color of the maintenance alert at status page, default to "yellow"
    // color: 'blue',
//   },
// ]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
