//this is main page of handling filter , price , rating , catergory sort by etc.
import * as React from 'react';
import SideBar from '../../components/productviewByFiltering/SideBar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItems from '../../components/ProductItems';
import { IoMenu } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ProductItemsListView from '../../components/ProductItemsListView';
import Pagination from '@mui/material/Pagination';




const ProductListing=() =>{
        const[itemView,setIsItemView]=useState('grid');



     const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-6">
        <div className='px-6 py-2'>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className='hover:text-[#ff5252]'>
                    Home
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                    className='hover:text-[#ff5252] '
                    >
                    Fashion
                    </Link>
                </Breadcrumbs>
            </div>
        </div>

        {/* for showing price filter , size, ratinf etc */}
        <div className='bg-white p-2 mt-4'>
            <div className="px-10 flex gap-3">
            <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
            <SideBar/>
            </div>
            {/* showing item here */}
                <div className="rightContent w-[80%] py-3">
                    {/* for top section contain like , sort, filter etc */}
                        <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
                            <div className="col1 flex items-center itemViewActions ">
                                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`}
                                onClick={()=>setIsItemView('list')}>
                                <IoMenu className="text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`}
                                onClick={()=>setIsItemView('grid')}>
                                <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                                </Button>
                                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>There are 27 products.</span>
                                
                            </div>

                            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                                    Sort By 
                                </span>
                                 <div>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className='!bg-white !text-[12px] !text-[#000]  !capitalize !border-[#000] !border-2'
                                    >
                                        Filter
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]  !capitalize'>Sales, high to low</MenuItem>
                                        <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]  !capitalize'>Relevance</MenuItem>
                                        <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]  !capitalize'>Name, A to Z </MenuItem>
                                        <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]  !capitalize'>Prize low to high </MenuItem>
                                    </Menu>
                                    </div>
                            </div>
                        </div>
                        

                    {/* for item showing */}
                    <div className={`grid ${itemView === 'grid' ? 'grid-cols-4 md:grid-cols-4':
                        'grid-cols-1 md:grid-cols-1'
                     } gap-3`}>
                        {
                            itemView === 'grid'?
                            <>
                            <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                                <ProductItems/>
                            </>
                            :
                            <>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            <ProductItemsListView/>
                            </>
                        }
                        
                    </div>
                    
                    <div className='flex items-center justify-center mt-5'>
                        <Pagination count={10} size="large" />
                    </div>
                    
                    </div>
                </div>
        </div>
    </section>
  )
}

export default ProductListing;
