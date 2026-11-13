// Mirror addition: UI and subtitle translations; the original voice recordings are retained.
const query = new URLSearchParams(globalThis.location?.search || '');
let saved;
try { saved = globalThis.localStorage?.getItem('evensong.language'); } catch {}
export const language = ['en', 'zh-CN'].includes(query.get('lang')) ? query.get('lang') : saved === 'en' ? 'en' : 'zh-CN';
export const ZH = {
  'Begin': '开始游戏', 'Options': '设置', 'Resume': '继续游戏', 'Start the fight again': '重新挑战',
  'Return to the title': '返回标题', 'Paused': '已暂停', 'Back': '返回', 'Thank you for playing.': '感谢游玩。',
  'Start the fight again?': '重新开始这场战斗？', 'Start again': '重新开始', 'Return to the title?': '返回标题画面？',
  'This fight will be lost.': '当前战斗进度将丢失。', 'Keep fighting': '继续战斗',
  'Keyboard and mouse': '键盘与鼠标', 'Gamepad': '手柄', 'or': '或', 'On the screen': '触屏操作',
  'Choose': '切换', 'Adjust': '调整', 'Select': '确认', 'Music': '音乐', 'Effects': '音效', 'Voice': '语音',
  'Camera sensitivity': '镜头灵敏度', 'Invert camera up and down': '反转镜头上下方向',
  'Off': '关闭', 'On': '开启', 'Picture quality': '画质', 'Low': '低', 'Medium': '中', 'High': '高', 'Ultra': '极高',
  'Reduced motion': '减少动态效果', 'Move': '移动', 'Turn the camera': '转动镜头', 'Lock on, and off': '锁定／解除锁定',
  'Light attack': '轻攻击', 'Heavy attack; hold to charge': '重攻击；长按蓄力', 'Block; hold': '长按格挡',
  'Roll; hold to sprint': '翻滚；长按冲刺', 'Jump': '跳跃', 'Drink from a flask': '使用药瓶', 'Pause': '暂停',
  'left thumb': '左手拇指', 'right thumb': '右手拇指', 'Look': '视角', 'Attack': '攻击', 'Block': '格挡',
  'Roll': '翻滚', 'Lock on': '锁定', 'Flask': '药瓶', 'Heavy': '重击', 'hold to sprint': '长按冲刺',
  'hold': '长按', 'hold to charge': '长按蓄力', 'Left thumb moves. Right thumb turns the camera.': '左手拇指移动，右手拇指转动镜头。',
  'Turn the screen on its side': '请横屏游玩', 'Evensong is played in landscape.': '《晚祷》需要横屏游玩。',
  'Controls': '操作说明', 'Hold to skip': '长按跳过', 'Hold ': '长按 ', ' to skip': ' 跳过',
  'You died': '你已倒下', 'Ondine, Cantor of the Drowned Choir': '溺没唱诗班领唱者 · 温蒂妮',
  'Put out your light, pilgrim. The choir is sleeping.': '熄灭你的灯火，朝圣者。唱诗班正在沉睡。',
  'Then you will sing with them.': '那么，你就与他们一同歌唱吧。', 'Let them wake.': '让他们醒来吧。',
  'i need to save you too?': '还得让我来救你？', 'what a waste of fries': '真是浪费薯条。',
  'Could not start the game: ': '游戏启动失败：', 'Evensong game view': '晚祷游戏画面',
};
export function t(text) { return language === 'zh-CN' ? ZH[text] ?? text : text; }
