import React from 'react'

const OfferPane = () => {
  return (
    <form>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="flashDeal" className="col-md-2 col-8 col-form-label col-form-label-sm">Flash Deal</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flashDeal"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="todaysDeal" className="col-md-2 col-8 col-form-label col-form-label-sm">Today's Deal</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="todaysDeal"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3">
            <label htmlFor="featured" className="col-md-2 col-8 col-form-label col-form-label-sm">Featured</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="featured"/>
                </div>
            </div>
        </div>
    </form>
  )
}

export default OfferPane