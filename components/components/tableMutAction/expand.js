export default {
    name: 'TableExpand',
    functional: true,
    props: {
        row: Object,
        all: Object,
        render: Function,
        index: Number,
    },
    render: (h, ctx) => {
      const params = {
        row: ctx.props.row,
        all: ctx.props.all,
        index: ctx.props.index
      };
      return ctx.props.render(h, params);
    }
};
