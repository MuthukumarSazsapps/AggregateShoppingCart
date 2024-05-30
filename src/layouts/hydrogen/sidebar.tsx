import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Title } from 'rizzui';
import { Collapse } from 'rizzui';
import { cn } from 'utils';
import { PiCaretDownBold, PiTableDuotone } from 'react-icons/pi';
import SimpleBar from 'simplebar-react';
import Logo from 'common/logo';
import StatusBadge from 'common/get-status-badge';
import useSidebar from 'hooks/use-sidebar';
import useLocalData from 'hooks/use-localData';
type menuItem = {
  name: string;
  href?: string;
  icon?: JSX.Element;
  badge?: string;
};
interface AccordianMenuItem extends menuItem {
  dropdownItems?: menuItem[];
}

export default function Sidebar({ className }: { className?: string }) {
  const pathname = window.location.pathname;
  const { userMenus } = useSidebar();
  const { role, userId } = useLocalData();

  return (
    <aside
      className={cn(
        'fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72',
        className,
      )}>
      <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
        <Link to="/" aria-label="Site Logo">
          <Logo className="max-w-[155px]" />
        </Link>
      </div>

      <SimpleBar className="h-[calc(100%-80px)]">
        <div className="mt-4 pb-3 3xl:mt-6">
          {userMenus.map((item: any, index: any) => {
            const isActive = pathname === (item?.href as string);
            const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
              (dropdownItem: any) => dropdownItem.href === pathname,
            );
            const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

            return (
              <Fragment key={item.name + '-' + index}>
                {item?.href ? (
                  <>
                    {item?.dropdownItems && item?.dropdownItems?.length ? (
                      <Collapse
                        defaultOpen={isDropdownOpen}
                        header={({ open, toggle }) => (
                          <div
                            onClick={toggle}
                            className={cn(
                              'group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                              isDropdownOpen
                                ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                                : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700',
                            )}>
                            <span className="flex items-center">
                              {item?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                    isDropdownOpen
                                      ? 'text-primary'
                                      : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700',
                                  )}>
                                  {item?.icon}
                                </span>
                              )}
                              {!item?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                    isDropdownOpen
                                      ? 'text-primary'
                                      : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700',
                                  )}>
                                  <PiTableDuotone />
                                </span>
                              )}
                              {item.name}
                            </span>

                            <PiCaretDownBold
                              strokeWidth={3}
                              className={cn(
                                'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                                open && 'rotate-0 rtl:rotate-0',
                              )}
                            />
                          </div>
                        )}>
                        {item?.dropdownItems?.map((dropdownItem: any, index: any) => {
                          const isChildActive = pathname === (dropdownItem?.href as string);

                          return (
                            <Link
                              to={dropdownItem?.href ?? '#'}
                              key={dropdownItem?.name + index}
                              className={cn(
                                'mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                                isChildActive
                                  ? 'text-primary'
                                  : 'text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900',
                              )}>
                              <div className="flex items-center truncate">
                                <span
                                  className={cn(
                                    'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                                    isChildActive
                                      ? 'bg-primary ring-[1px] ring-primary'
                                      : 'opacity-40',
                                  )}
                                />{' '}
                                <span className="truncate">{dropdownItem?.name}</span>
                              </div>
                              {dropdownItem?.badge?.length ? (
                                <StatusBadge status={dropdownItem?.badge} />
                              ) : null}
                            </Link>
                          );
                        })}
                      </Collapse>
                    ) : (
                      <Link
                        to={item?.href}
                        className={cn(
                          'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                          isActive
                            ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5'
                            : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90',
                        )}>
                        <div className="flex items-center truncate">
                          {item?.icon && (
                            <span
                              className={cn(
                                'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                isActive
                                  ? 'text-primary'
                                  : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700',
                              )}>
                              {item?.icon}
                            </span>
                          )}
                          <span className="truncate">{item.name}</span>
                        </div>
                        {/* {item?.badge?.length ? <StatusBadge status={item?.badge} /> : null} */}
                      </Link>
                    )}
                  </>
                ) : (
                  <Title
                    as="h6"
                    className={cn(
                      'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
                      index !== 0 && 'mt-6 3xl:mt-7',
                    )}>
                    {item.name}
                  </Title>
                )}
              </Fragment>
            );
          })}
        </div>
      </SimpleBar>
    </aside>
  );
}