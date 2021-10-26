import 'typeface-roboto-condensed';
import "@fontsource/open-sans";
import * as React from 'react';
import { FunctionComponent } from 'react';
export interface HealthiMedBarProps {
    /**
     * Insert the "big" buttons.
     */
    majorButtons?: React.ReactNode;
    /**
     * Key area section.
     */
    keyArea?: React.ReactNode;
    /**
     * Cost area section.
     */
    costArea?: React.ReactNode;
    /**
     * Classes of the toolbar
     */
    toolbarClasses?: string;
}
declare const HealthiMedBar: FunctionComponent<HealthiMedBarProps>;
export default HealthiMedBar;
