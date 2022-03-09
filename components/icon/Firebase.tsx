// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface FirebaseProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const Firebase: React.FunctionComponent<FirebaseProps> = (props) => {
  const {
    bgColor = '#001e36',
    textColor = '#31a8ff',
    viewBox = '0 0 24 24',
    focusable = false,
    'aria-hidden': ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      focusable={focusable}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      <path
       d="M13.249 6.953c-2.833.351-4.585 1.184-4.794 2.293-.038.18-.038 1.184-.019 2.236.038 1.573.066 1.971.208 2.226.152.294.152.341 0 .739-.142.369-.152.654-.104 2.188.038.966.114 1.904.18 2.075.085.237.085.369 0 .559-.142.303-.152 2.975-.019 3.78.057.379.18.673.36.9.843 1.052 3.079 1.677 6.366 1.781 4.083.133 7.2-.635 7.939-1.952.199-.341.208-.493.208-2.226 0-1.468-.028-1.933-.151-2.226-.123-.313-.123-.417-.028-.597.085-.161.114-.71.095-2.018-.019-1.876-.047-2.151-.256-2.454-.104-.152-.095-.227.019-.464.123-.227.152-.644.142-2.302-.009-1.175-.057-2.15-.123-2.33-.256-.786-1.393-1.506-2.937-1.876-1.895-.445-4.964-.587-7.086-.332zm.436.891c-.028.047.502.057 1.213.028 1.052-.038 3.827.123 3.733.218-.019.019-.445.076-.957.133-.521.057-1.023.152-1.137.208-.189.104-.189.114-.028.237.161.114.151.123-.095.18-.777.161-1.279.36-1.459.587-.455.578-.057 1.156.919 1.364.739.152 3.657.057 4.462-.142.891-.227 1.345-.483 1.345-.767 0-.388-.569-.673-1.942-.957-.73-.142-.265-.171.644-.028.9.142 1.63.417 1.866.72.171.227.189.379.189 2.027 0 2.037.019 1.989-.909 2.416-1.345.635-3.534.872-7.333.805-.72-.019-.777-.028-.578-.142s.133-.133-.663-.18c-1.108-.066-2.075-.341-2.529-.701-.55-.436-.9-1.222-.947-2.15-.047-.881.123-1.895.303-1.829.066.028.208-.133.341-.369.379-.72 1.203-1.213 2.558-1.554.805-.199 1.08-.227 1.004-.104zm-3.562 7.105c0 .388.189.549.928.767 2.672.805 8.697.701 10.421-.18.351-.18.398-.237.398-.53 0-.36.095-.417.322-.18.18.18.171.019.151 1.98l-.009 1.611-.275.256c-.587.54-2.624.966-5.116 1.08-3.088.142-6.622-.464-7.162-1.232-.104-.152-.133-.559-.133-1.847 0-1.402.019-1.677.161-1.828.218-.246.313-.208.313.104zm.284 5.419c.815.597 4.86.995 7.598.758 1.506-.133 2.804-.379 3.429-.654.417-.189.436-.218.436-.578 0-.265.038-.388.133-.388.322 0 .369.256.35 1.999-.009.947-.047 1.772-.066 1.838-.076.189-.881.587-1.554.758-1.146.303-2.217.436-3.932.493-3.164.104-6.139-.379-6.944-1.127-.199-.199-.208-.265-.208-1.914 0-1.639.009-1.715.218-1.933l.208-.227.047.407c.038.284.114.445.284.568z"
        style={{ fill: textColor }}
      />
      <g id="Firebase">
        <path
         d="M13.249 6.953c-2.833.351-4.585 1.184-4.794 2.293-.038.18-.038 1.184-.019 2.236.038 1.573.066 1.971.208 2.226.152.294.152.341 0 .739-.142.369-.152.654-.104 2.188.038.966.114 1.904.18 2.075.085.237.085.369 0 .559-.142.303-.152 2.975-.019 3.78.057.379.18.673.36.9.843 1.052 3.079 1.677 6.366 1.781 4.083.133 7.2-.635 7.939-1.952.199-.341.208-.493.208-2.226 0-1.468-.028-1.933-.151-2.226-.123-.313-.123-.417-.028-.597.085-.161.114-.71.095-2.018-.019-1.876-.047-2.151-.256-2.454-.104-.152-.095-.227.019-.464.123-.227.152-.644.142-2.302-.009-1.175-.057-2.15-.123-2.33-.256-.786-1.393-1.506-2.937-1.876-1.895-.445-4.964-.587-7.086-.332zm.436.891c-.028.047.502.057 1.213.028 1.052-.038 3.827.123 3.733.218-.019.019-.445.076-.957.133-.521.057-1.023.152-1.137.208-.189.104-.189.114-.028.237.161.114.151.123-.095.18-.777.161-1.279.36-1.459.587-.455.578-.057 1.156.919 1.364.739.152 3.657.057 4.462-.142.891-.227 1.345-.483 1.345-.767 0-.388-.569-.673-1.942-.957-.73-.142-.265-.171.644-.028.9.142 1.63.417 1.866.72.171.227.189.379.189 2.027 0 2.037.019 1.989-.909 2.416-1.345.635-3.534.872-7.333.805-.72-.019-.777-.028-.578-.142s.133-.133-.663-.18c-1.108-.066-2.075-.341-2.529-.701-.55-.436-.9-1.222-.947-2.15-.047-.881.123-1.895.303-1.829.066.028.208-.133.341-.369.379-.72 1.203-1.213 2.558-1.554.805-.199 1.08-.227 1.004-.104zm-3.562 7.105c0 .388.189.549.928.767 2.672.805 8.697.701 10.421-.18.351-.18.398-.237.398-.53 0-.36.095-.417.322-.18.18.18.171.019.151 1.98l-.009 1.611-.275.256c-.587.54-2.624.966-5.116 1.08-3.088.142-6.622-.464-7.162-1.232-.104-.152-.133-.559-.133-1.847 0-1.402.019-1.677.161-1.828.218-.246.313-.208.313.104zm.284 5.419c.815.597 4.86.995 7.598.758 1.506-.133 2.804-.379 3.429-.654.417-.189.436-.218.436-.578 0-.265.038-.388.133-.388.322 0 .369.256.35 1.999-.009.947-.047 1.772-.066 1.838-.076.189-.881.587-1.554.758-1.146.303-2.217.436-3.932.493-3.164.104-6.139-.379-6.944-1.127-.199-.199-.208-.265-.208-1.914 0-1.639.009-1.715.218-1.933l.208-.227.047.407c.038.284.114.445.284.568z"
          style={{ fill: textColor }}
        />
        <path
         d="M13.249 6.953c-2.833.351-4.585 1.184-4.794 2.293-.038.18-.038 1.184-.019 2.236.038 1.573.066 1.971.208 2.226.152.294.152.341 0 .739-.142.369-.152.654-.104 2.188.038.966.114 1.904.18 2.075.085.237.085.369 0 .559-.142.303-.152 2.975-.019 3.78.057.379.18.673.36.9.843 1.052 3.079 1.677 6.366 1.781 4.083.133 7.2-.635 7.939-1.952.199-.341.208-.493.208-2.226 0-1.468-.028-1.933-.151-2.226-.123-.313-.123-.417-.028-.597.085-.161.114-.71.095-2.018-.019-1.876-.047-2.151-.256-2.454-.104-.152-.095-.227.019-.464.123-.227.152-.644.142-2.302-.009-1.175-.057-2.15-.123-2.33-.256-.786-1.393-1.506-2.937-1.876-1.895-.445-4.964-.587-7.086-.332zm.436.891c-.028.047.502.057 1.213.028 1.052-.038 3.827.123 3.733.218-.019.019-.445.076-.957.133-.521.057-1.023.152-1.137.208-.189.104-.189.114-.028.237.161.114.151.123-.095.18-.777.161-1.279.36-1.459.587-.455.578-.057 1.156.919 1.364.739.152 3.657.057 4.462-.142.891-.227 1.345-.483 1.345-.767 0-.388-.569-.673-1.942-.957-.73-.142-.265-.171.644-.028.9.142 1.63.417 1.866.72.171.227.189.379.189 2.027 0 2.037.019 1.989-.909 2.416-1.345.635-3.534.872-7.333.805-.72-.019-.777-.028-.578-.142s.133-.133-.663-.18c-1.108-.066-2.075-.341-2.529-.701-.55-.436-.9-1.222-.947-2.15-.047-.881.123-1.895.303-1.829.066.028.208-.133.341-.369.379-.72 1.203-1.213 2.558-1.554.805-.199 1.08-.227 1.004-.104zm-3.562 7.105c0 .388.189.549.928.767 2.672.805 8.697.701 10.421-.18.351-.18.398-.237.398-.53 0-.36.095-.417.322-.18.18.18.171.019.151 1.98l-.009 1.611-.275.256c-.587.54-2.624.966-5.116 1.08-3.088.142-6.622-.464-7.162-1.232-.104-.152-.133-.559-.133-1.847 0-1.402.019-1.677.161-1.828.218-.246.313-.208.313.104zm.284 5.419c.815.597 4.86.995 7.598.758 1.506-.133 2.804-.379 3.429-.654.417-.189.436-.218.436-.578 0-.265.038-.388.133-.388.322 0 .369.256.35 1.999-.009.947-.047 1.772-.066 1.838-.076.189-.881.587-1.554.758-1.146.303-2.217.436-3.932.493-3.164.104-6.139-.379-6.944-1.127-.199-.199-.208-.265-.208-1.914 0-1.639.009-1.715.218-1.933l.208-.227.047.407c.038.284.114.445.284.568z"
          style={{ fill: bgColor }}
        />
      </g>
    </SvgIcon>
  );
};

export default Firebase;
