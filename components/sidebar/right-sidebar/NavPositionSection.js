import React, { useContext, useState } from 'react'
import { DigiContext } from '../../../context/DigiContext'

const NavPositionSection = () => {
    const {handleLayoutPosition, layoutPosition, handleRightSideDropdownToggle, rightSideDropdown} = useContext(DigiContext);
    const [showBackgroundBox, setShowBackgroundBox] = useState(rightSideDropdown.navPosition);

    const handleToggle = () => {
        handleRightSideDropdownToggle('navPosition');
        setShowBackgroundBox((prevState) => !prevState);
      };
  return (
    <div className="right-sidebar-group">
        <span className="sidebar-subtitle">
            Website Layout 
            <span>
            <i 
            className={`fa-light ${rightSideDropdown.navPosition ? 'fa-angle-up' : 'fa-angle-down'}`} 
            role="button" 
            onClick={handleToggle}
            ></i>
            </span>
        </span>
        <div className={`settings-row ${showBackgroundBox ? 'show' : 'hide'}`}>
            <div className="settings-col">
                <div className={`dashboard-icon d-flex gap-1 border rounded ${layoutPosition.vertical? 'active':''}`} role='button' onClick={()=>handleLayoutPosition('vertical')} id="verticalMenu">
                    <div className="pb-2 px-1 pt-1 bg-menu">
                        <div className="px-2 py-1 rounded-pill bg-nav mb-2"></div>
                        <div className="border border-primary mb-1">
                            <div className="px-2 pt-1 bg-nav mb-1"></div>
                            <div className="px-2 pt-1 bg-nav mb-1"></div>
                        </div>
                        <div className="border border-primary">
                            <div className="px-2 pt-1 bg-nav mb-1"></div>
                            <div className="px-2 pt-1 bg-nav mb-1"></div>
                        </div>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-between">
                        <div className="px-2 py-1 bg-menu"></div>
                        <div className="px-2 py-1 bg-menu"></div>
                    </div>
                    <span className="part-txt">Vertical</span>
                </div>
            </div>
            <div className="settings-col d-lg-block d-none">
                <div className={`dashboard-icon d-flex h-100 gap-1 border rounded ${layoutPosition.horizontal? 'active':''}`} role='button' onClick={()=>handleLayoutPosition('horizontal')} id="horizontalMenu">
                    <div className="w-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="p-1 bg-menu border-bottom">
                                <div className="rounded-circle p-1 bg-nav w-max-content"></div>
                            </div>
                            <div className="p-1 bg-menu d-flex gap-1 mb-1">
                                <div className="w-max-content px-2 pt-1 rounded bg-nav"></div>
                                <div className="w-max-content px-2 pt-1 rounded bg-nav"></div>
                                <div className="w-max-content px-2 pt-1 rounded bg-nav"></div>
                                <div className="w-max-content px-2 pt-1 rounded bg-nav"></div>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-menu"></div>
                    </div>
                    <span className="part-txt">Horizontal</span>
                </div>
            </div>
            <div className="settings-col">
            <div className={`dashboard-icon d-flex h-100 gap-1 border rounded ${layoutPosition.twoColumn? 'active':''}`} role='button' onClick={()=>handleLayoutPosition('twoColumn')} id="twoColumnMenu">
                    <div className="p-1 bg-menu"></div>
                    <div className="pb-4 px-1 pt-1 bg-menu">
                        <div className="px-2 py-1 rounded-pill bg-nav mb-2"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-between">
                        <div className="px-2 py-1 bg-menu"></div>
                        <div className="px-2 py-1 bg-menu"></div>
                    </div>
                    <span className="part-txt">Two column</span>
                </div>
            </div>
            <div className="settings-col">
                <div className={`dashboard-icon d-flex h-100 gap-1 border rounded ${layoutPosition.flush? 'active':''}`} role='button' onClick={()=>handleLayoutPosition('flush')} id="flush">
                    <div className="pb-4 px-1 pt-1 bg-menu">
                        <div className="px-2 py-1 rounded-pill bg-nav mb-2"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                        <div className="px-2 pt-1 bg-nav mb-1"></div>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-between">
                        <div className="px-2 py-1 bg-menu"></div>
                        <div className="px-2 py-1 bg-menu"></div>
                    </div>
                    <span className="part-txt">Flush</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavPositionSection