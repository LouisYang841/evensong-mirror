import { language, t } from './ui/i18n.js';
document.documentElement.lang = language;
document.getElementById('view').setAttribute('aria-label', t('Evensong game view'));
const toolbar = document.createElement('aside');
toolbar.className = 'mirror-tools';
toolbar.setAttribute('aria-label', language === 'zh-CN' ? '语言与来源' : 'Language and attribution');
const zh = language === 'zh-CN';
toolbar.innerHTML = `<span>${zh ? '非官方中文访问镜像，我们并非原作者 · 原作' : 'Unofficial mirror; we are not the creators · Created by'} <a href="https://x.com/kevin_t_ngo" target="_blank" rel="noopener noreferrer">Kevin Ngo</a></span>
  <span><a href="https://evensong-phi.vercel.app/" target="_blank" rel="noopener noreferrer">${zh ? '原站' : 'Original'}</a> · <a href="https://github.com/LouisYang841/evensong-mirror" target="_blank" rel="noopener noreferrer">GitHub</a> · <label>${zh ? '语言' : 'Language'} <select aria-label="${zh ? '语言（切换后重新开始）' : 'Language (restarts the game)'}"><option value="zh-CN">简体中文</option><option value="en">English</option></select></label></span>`;
document.body.appendChild(toolbar);
const select = toolbar.querySelector('select');
select.value = language;
select.addEventListener('change', () => {
  try { localStorage.setItem('evensong.language', select.value); } catch {}
  const url = new URL(location.href); url.searchParams.set('lang', select.value); location.assign(url);
});
// Keep menu keys and touch gestures inside the toolbar from controlling the game.
for (const event of ['keydown','keyup','pointerdown','pointerup']) toolbar.addEventListener(event, e => e.stopPropagation());
