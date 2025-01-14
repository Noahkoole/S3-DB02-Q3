﻿using Backend_DAL_Interface;
using Backend_DTO.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend_DAL
{
    public class ProductionLineDAL : IProductionLineDAL
    {
        readonly Q3Context _Context;

        public ProductionLineDAL(Q3Context context)
        {
            _Context = context;
        }

        public ProductionLineDTO GetProductionLine(int productLine_id)
        {
            return _Context.ProductionLines
                .Where(pl => pl.Id == productLine_id)
                .Include(pl => pl.Machines)
                .Include(pl => pl.Components)
                .AsNoTracking()
                .FirstOrDefault();
        }

        public List<ProductionLineDTO> GetProductionLines()
        {
            return _Context.ProductionLines
                .Include(pl => pl.Machines)
                .Include(pl => pl.Components)
                .AsNoTracking()
                .ToList()
                .OrderBy(pl => pl.Name[0])
                .ThenBy(pl => Convert.ToInt32(pl.Name.Substring(1)))
                .ToList();
        }
    }
}
