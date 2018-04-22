/**
 * Created by apple on 2018/4/20.
 */
/**
 * Created by wupeng
 */
export default {
  // 分页
  pageSize: 10,
  size: 'small',
  // 提示信息style
  info: {
    delete: {
      success: '删除信息成功',
      error: '删除信息失败',
    },
    update: {
      success: '修改信息成功',
      error: '修改信息失败',
    },
    save: {
      success: '保存信息成功',
      error: '保存信息失败',
    },
  },

  // 开启导航过权限控制
  authMenu: true,
  // 接口公共路径
  publicUrl: '',
  // 表报公共路径
  publicReportUrl: 'http://101.37.110.87:8100/gngc/',
  // 文件预览前面IP地址 以后会变,需要更改
  publicPreviewFront: 'http://101.37.110.87:8100/gngcpreview',
  // 文件预览后面IP地址,以后会变,需要更改
  publicPreviewAfter: 'http://10.80.178.59:8100/gngc',

  // 结算状态
  settlementState: [
    {text: '已完成', value: '已完成'},
    {text: '未完成', value: '未完成'},
  ],

  // 过程资料是否完善
  settlementFileState: [
    {text: '完整', value: '完整'},
    {text: '不完整', value: '不完整'},
  ],

  // 审计状态
  auditState: [
    {text: '已完成', value: '已完成'},
    {text: '未完成', value: '未完成'},
  ],

  // 选择框宽度,日期选择框宽度
  selecteWidth: {width: 140},

  // rc 对应的方法
  rc: {
    0: 'success',
    1: 'error'
  },

}
