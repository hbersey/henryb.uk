export type IFrameProps = {
  loading?: 'lazy' | 'eager',
  title?: string,
}

type Props = {
  src: string,
  props?: any,
} & IFrameProps

const IFrameWrapper = ({ src, loading, props, title }: Props) => {
  return <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src={src}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            loading={loading} {...props} title={title} />
  </div>;
};

export default IFrameWrapper;