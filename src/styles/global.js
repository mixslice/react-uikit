export default ({ palette, fontFamily }) => ({
  'html, body, #root': {
    height: '100%'
  },
  'html, body': {
    fontSize: 14,
    lineHeight: 1.5,
    color: palette.foreground,
    fontFamily,
  },
  p: {
    marginTop: 0
  },
  '.btn+.btn': {
    marginLeft: 10
  }
});
