/* eslint-disable react/no-multi-comp */
import { SvgSearch } from '@bspk/icons/Search';
import { SvgIcon } from '@bspk/icons/SvgIcon';
import { Dialog } from '@bspk/ui/Dialog';
import { Select } from '@bspk/ui/Select';
import { Switch } from '@bspk/ui/Switch';
import { TextInput as TextInput } from '@bspk/ui/TextInput';
import { ToggleOption } from '@bspk/ui/ToggleOption';
import { useUIContext } from '@bspk/ui/hooks/useUIContext';
import { cssWithVars } from '@bspk/ui/utils/cwv';
import { Page } from 'components/Page';
import { Fragment, HTMLProps, ReactNode, useState } from 'react';
import { Syntax } from 'src/components/Syntax';
import { ICON_META, IconMeta, IconName, ICONS } from 'src/utils/icons';

import 'src/docs/icons.scss';

const titleCase = (word: string) => word[0].toUpperCase() + word.slice(1);

const iconTypes = ['material', 'anywhere', 'country', 'brand'] as const;

type IconType = (typeof iconTypes)[number];

export function Icons() {
    const [filter, setFilter] = useState<{
        search?: string;
        type?: IconType | 'all';
    }>({});

    const [selectedIcon, setSelectedIcon] = useState<IconName | null>(null);

    const filtered = ICONS.filter((icon) => {
        // don't show duplicate icons filled or unfilled
        return !icon.variantUnfilled;
    }).filter((icon) => {
        // filter by search and type
        const search = filter.search?.toLowerCase() || '';
        const type = filter.type ? filter.type : 'all';

        const searchFilter = !search || `${icon.name} ${icon.type} ${icon.alias}`.toLowerCase().includes(search);
        const typeFilter = !type || type === 'all' || icon.type === type;

        return searchFilter && typeFilter;
    });

    return (
        <Page>
            <h1>Icons</h1>
            <p>Click an icon to see the variants, color options, and copy import code.</p>
            <SelectedIconDialog icon={selectedIcon && ICON_META[selectedIcon]} setSelectedIcon={setSelectedIcon} />
            <div data-page-icons>
                <div data-filters>
                    <TextInput
                        aria-label="Search icons"
                        data-search
                        id="icon-search"
                        leading={<SvgSearch />}
                        name="icon-search"
                        onChange={(search) => {
                            setFilter((p) => ({
                                ...p,
                                search,
                            }));
                        }}
                        placeholder="Search for an icon"
                        value={filter.search}
                    />
                    <Select
                        data-type
                        label="Icon type"
                        name="icon-type"
                        onChange={(value) => {
                            setFilter((p) => ({
                                ...p,
                                type: value as IconType,
                            }));
                        }}
                        options={[
                            { label: 'All types', value: 'all' },
                            ...iconTypes.map((type) => ({
                                label: titleCase(type),
                                value: type,
                            })),
                        ]}
                        value={filter.type || 'all'}
                    />
                </div>
                {(filter.search || filter.type) && (
                    <p>
                        {filtered.length} item{filtered.length === 1 ? '' : 's'}
                        {filter.search && ` matching "${filter.search}"`}
                        {filter.type && filter.type !== 'all' && ` of type "${filter.type}"`}
                    </p>
                )}
                {iconTypes.map((type) => {
                    const byType = filtered.filter((icon) => icon.type === type);

                    if (byType.length === 0) return null;

                    return (
                        <Fragment key={type}>
                            <div data-type-header>{titleCase(type)}</div>
                            <div data-icons>
                                {byType.map((icon, index) => {
                                    return (
                                        <button
                                            data-has-variant={!!icon.variantFill || !!icon.variantUnfilled || undefined}
                                            data-icon
                                            data-name={icon.name}
                                            data-type={icon.type}
                                            key={icon.name + index}
                                            onClick={() => setSelectedIcon(icon.name)}
                                        >
                                            <span data-title>{icon.title}</span>
                                            <span data-svg>{icon.name && <SvgIcon name={icon.name} width={48} />}</span>
                                            {icon.variantFill ? (
                                                <>
                                                    <span data-filled data-svg>
                                                        {icon.variantFill && (
                                                            <SvgIcon name={icon.variantFill} width={48} />
                                                        )}
                                                    </span>
                                                    <span data-no-fill>
                                                        <span>Not </span>Filled
                                                    </span>
                                                </>
                                            ) : (
                                                <span data-no-variant>No Variant</span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </Page>
    );
}

const CheckeredBackgroundContainer = ({ children, ...props }: HTMLProps<HTMLDivElement> & { children: ReactNode }) => {
    const { theme } = useUIContext();
    return (
        <div
            data-checkered
            {...props}
            style={{
                ...props.style,
                ...cssWithVars({
                    '--background1': theme === 'dark' ? '#23272f' : '#fff',
                    '--background2': theme === 'dark' ? '#2c2f38' : '#f3f3f3',
                }),
            }}
        >
            {children}
        </div>
    );
};

function SelectedIconDialog({
    icon,
    setSelectedIcon,
}: {
    icon: IconMeta | null | undefined;
    setSelectedIcon: (nextIcon: IconName | null) => void;
}) {
    const [showFilled, setShowFilled] = useState(false);

    if (!icon) return null;

    const iconFilled = icon.variantFill ? ICON_META[icon.variantFill] : undefined;

    return (
        <Dialog onClose={() => setSelectedIcon(null)} open={!!icon}>
            <div data-selected-icon>
                <header>
                    <span data-title>{icon.title}</span>
                    <span data-type>{titleCase(icon.type)}</span>
                </header>
                {[showFilled && iconFilled ? iconFilled : icon].map(({ name: iconName }) => (
                    <Fragment key={iconName}>
                        <Syntax
                            code={`import { Svg${iconName} } from '@bspk/icons/${iconName}';`}
                            language="typescript"
                        />
                        <div data-preview>
                            <div data-preview-large>
                                <CheckeredBackgroundContainer>
                                    <SvgIcon name={iconName} width={120} />
                                </CheckeredBackgroundContainer>
                                {iconFilled && (
                                    <ToggleOption label={showFilled ? 'Show Original' : 'Show Filled'}>
                                        <Switch
                                            aria-label="Filled"
                                            checked={showFilled}
                                            name="filled"
                                            onChange={setShowFilled}
                                        />
                                    </ToggleOption>
                                )}
                            </div>
                            <div data-sizes-color>
                                <div data-sizes>
                                    {[32, 48, 64].map((size) => (
                                        <CheckeredBackgroundContainer
                                            data-icon-wrapper
                                            key={`size-${size}`}
                                            style={cssWithVars({
                                                '--size': `${size}px`,
                                            })}
                                        >
                                            <SvgIcon name={iconName} width={size} />
                                        </CheckeredBackgroundContainer>
                                    ))}
                                </div>
                                <div data-colors>
                                    {['original', 'primary', 'secondary'].map((color) => {
                                        return (
                                            <Fragment key={color}>
                                                <span>{color}</span>
                                                {['background', 'foreground'].map((variant) => {
                                                    return (
                                                        <div
                                                            data-color={color}
                                                            data-color-variant
                                                            data-variant={variant}
                                                            key={color + variant}
                                                            style={{
                                                                backgroundColor:
                                                                    variant === 'background'
                                                                        ? 'var(--background)'
                                                                        : 'var(--foreground)',
                                                                color:
                                                                    variant === 'background'
                                                                        ? 'var(--foreground)'
                                                                        : 'var(--background)',
                                                            }}
                                                        >
                                                            <SvgIcon name={iconName} />
                                                        </div>
                                                    );
                                                })}
                                            </Fragment>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
                <div data-search-terms>
                    <span>Search terms: </span>
                    {icon.alias || 'None'}
                </div>
            </div>
        </Dialog>
    );
}

/** Copyright 2025 Anywhere Real Estate - CC BY 4.0 */
