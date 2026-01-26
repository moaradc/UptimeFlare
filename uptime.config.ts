// 请勿编辑此行
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页标题
  title: "MOARA的状态页",
  // 显示在状态页顶部的链接，可将 highlight 设为 true
  links: [
    { link: 'https://blog.945426.xyz/', label: '博客', highlight: true },
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
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'MOARA-Blog-Netlify',
      name: '主博客节点',
      method: 'HEAD',
      target: 'https://blog.945426.xyz/favicon.jpg',
      tooltip: 'Netlify',
      statusPageLink: 'https://blog.945426.xyz/',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'MOARA-Blog-Vercel',
      name: '备用博客节点',
      method: 'HEAD',
      target: 'https://blog2.945426.xyz/favicon.jpg',
      tooltip: 'Vercel',
      statusPageLink: 'https://blog2.945426.xyz/',
      checkProxy: 'worker://apac',
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
      method: 'GET',
      target: 'https://cors.945426.xyz/health',
      statusPageLink: 'https://cors.945426.xyz/',
      checkProxy: 'worker://apac',
      responseKeyword: 'OK',
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
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lddc',
      name: 'LDDC API',
      method: 'HEAD',
      target: 'https://lddc.945426.xyz/',
      tooltip: 'zeabur节点',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'lddc2',
      name: 'LDDC API',
      method: 'HEAD',
      target: 'https://lddc.945426.xyz/',
      tooltip: 'leapcell节点',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'pansou',
      name: '盘搜',
      method: 'GET',
      target: 'https://ps.945426.xyz/api/health',
      tooltip: 'ClawCloud',
      statusPageLink: 'https://ps.945426.xyz/',
      checkProxy: 'worker://apac',
      responseKeyword: 'ok',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'pan',
      name: 'Cloudreve',
      method: 'GET',
      target: 'https://pan.945426.xyz/',
      tooltip: 'zeabur',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'tv',
      name: 'LunaTV',
      method: 'HEAD',
      target: 'https://tv.945426.xyz/',
      tooltip: 'zeabur',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'waline',
      name: 'Waline 评论系统',
      method: 'HEAD',
      target: 'https://waline.945426.xyz/',
      tooltip: 'Vercel',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'test',
      name: 'test',
      method: 'HEAD',
      target: 'https://worker.521116.xyz/',
      tooltip: 'test',
      checkProxy: 'worker://apac',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
    }
  ],
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
      // 注意：已在 webhook 中配置了 Resend 基础通知
      // 调用 Resend API 发送邮件通知 (高级 HTML 格式)
      // 务必在 Cloudflare Worker 的设置 -> 变量中配置: RESEND_API_KEY
      if (env.RESEND_API_KEY) {
        try {
          const statusText = isUp ? '恢复正常 (UP)' : '服务中断 (DOWN)';
          const statusTitle = isUp ? 'ONLINE' : 'OFFLINE';
          const neoGreen = '#a3e635';
          const neoPink = '#f472b6';
          const neoYellow = '#facc15';
          const accentColor = isUp ? neoGreen : neoPink;
          const subject = `${statusText} 「${monitor.name}」 站点状态变更通知`;
          
          let timeString = new Date(timeNow * 1000).toISOString();
          try {
            timeString = new Date(timeNow * 1000).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
          } catch (e) { }
          let bigStatusCode = isUp ? '200' : '500'; 

          if (!isUp) {
            const codeMatch = reason.match(/Got:\s*(\d+)/i) || reason.match(/status:\s*(\d+)/i);
            if (codeMatch && codeMatch[1]) {
              bigStatusCode = codeMatch[1];
            }
          }
          
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
                    <p style="margin: 5px 0;">> 名称: <strong>${monitor.name}</strong></p>
                    <p style="margin: 5px 0;">> 状态: <span style="color: ${isUp ? '#15803d' : '#be185d'}; font-weight: bold;">${statusText}</span></p>
                    <p style="margin: 5px 0;">> 时间: ${timeString}</p>
                    <p style="margin: 5px 0; word-break: break-all;">> 备注: ${reason}</p>
                  </div>

                  <!-- Action Button -->
                  <a href="https://status.945426.xyz/" style="display: block; text-decoration: none; background-color: ${accentColor}; color: #000000; border: 2px solid #000000; padding: 12px; font-weight: 800; font-family: sans-serif; text-transform: uppercase; box-shadow: 4px 4px 0px 0px #000000;">
                    访问状态页
                  </a>

                </div>

                <!-- Footer Strip -->
                <div style="border-top: 2px solid #000000; background-color: #f9fafb; padding: 8px 15px; font-family: monospace; font-size: 10px; font-weight: bold; color: #6b7280; display: flex; justify-content: space-between;">
                  <span style="float: left;">该邮件由 Resend 自动发送，请勿回复</span>
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
      
      // 这不会遵循宽限期设置，并且在状态变化时立即调用
      // 如果您想实现宽限期，需要手动处理      
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

// 您可以在此定义多个维护窗口
// 维护期间，状态页将显示告警提示
// 同时，相关的宕机通知将被跳过（如果配置了通知）
// 当然，如果不需要此功能，也可以保持留空

const maintenances: MaintenanceConfig[] = []

// const maintenances: MaintenanceConfig[] = [
//   {
    // [可选] 受此维护影响的监控器ID
    // monitors: ['foo_monitor', 'bar_monitor'],
    // [可选] 若未指定则默认为"计划维护"
    // title: 'Test Maintenance',
    // 维护相关说明会显示在状态页面上。
    // body: '这是一次测试维护，进行服务器软件升级',
    // 维护开始时间，使用 UNIX 时间戳或 ISO 8601 格式
    // start: '2020-01-01T00:00:00+08:00',
    // [可选] 维护结束时间，使用 UNIX 时间戳或 ISO 8601 格式
    // 若未指定，则视为持续维护中
    // end: '2050-01-01T00:00:00+08:00',
    // [可选] 状态页面上维护提醒的颜色，默认为 "yellow"（黄色）
    // color: 'blue',
//   },
// ]

// 请勿编辑此行
export { maintenances, pageConfig, workerConfig }
