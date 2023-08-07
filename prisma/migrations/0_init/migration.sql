-- CreateTable
CREATE TABLE `company_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `territory` VARCHAR(255) NULL,
    `involved_concept` VARCHAR(255) NULL,
    `main_business` VARCHAR(255) NULL,
    `list_date` VARCHAR(255) NULL,
    `navps` VARCHAR(255) NULL,
    `eps` VARCHAR(255) NULL,
    `teta_profits` VARCHAR(255) NULL,
    `npgr` VARCHAR(255) NULL,
    `taking` VARCHAR(255) NULL,
    `cfps` VARCHAR(255) NULL,
    `rps` VARCHAR(255) NULL,
    `udpps` VARCHAR(255) NULL,
    `general_capital` VARCHAR(255) NULL,
    `circulation_stock` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gyb_index_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(255) NULL,
    `date` VARCHAR(255) NULL,
    `closePoint` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `strategy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `parameter` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trd_co` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Stkcd` VARCHAR(255) NULL,
    `Stknme` VARCHAR(255) NULL,
    `Listdt` VARCHAR(255) NULL,
    `Cuntrycd` VARCHAR(255) NULL,
    `Conme` VARCHAR(255) NULL,
    `Conme_en` VARCHAR(255) NULL,
    `Indcd` VARCHAR(255) NULL,
    `Indnme` VARCHAR(255) NULL,
    `Nindcd` VARCHAR(255) NULL,
    `Nindnme` VARCHAR(255) NULL,
    `Nnindcd` VARCHAR(255) NULL,
    `Nnindnme` VARCHAR(255) NULL,
    `Estbdt` VARCHAR(255) NULL,
    `PROVINCE` VARCHAR(255) NULL,
    `PROVINCECODE` VARCHAR(255) NULL,
    `CITY` VARCHAR(255) NULL,
    `CITYCODE` VARCHAR(255) NULL,
    `OWNERSHIPTYPE` VARCHAR(255) NULL,
    `OWNERSHIPTYPECODE` VARCHAR(255) NULL,
    `Favaldt` VARCHAR(255) NULL,
    `Curtrd` VARCHAR(255) NULL,
    `Ipoprm` VARCHAR(255) NULL,
    `Ipoprc` VARCHAR(255) NULL,
    `Ipocur` VARCHAR(255) NULL,
    `Nshripo` VARCHAR(255) NULL,
    `Parvcur` VARCHAR(255) NULL,
    `Ipodt` VARCHAR(255) NULL,
    `Parval` VARCHAR(255) NULL,
    `Sctcd` VARCHAR(255) NULL,
    `Statco` VARCHAR(255) NULL,
    `Crcd` VARCHAR(255) NULL,
    `Statdt` VARCHAR(255) NULL,
    `Commnt` VARCHAR(255) NULL,
    `Markettype` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trd_dalyr` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Stkcd` VARCHAR(255) NULL,
    `Trddt` VARCHAR(255) NULL,
    `Opnprc` VARCHAR(255) NULL,
    `Hiprc` VARCHAR(255) NULL,
    `Loprc` VARCHAR(255) NULL,
    `Clsprc` VARCHAR(255) NULL,
    `Dnshrtrd` VARCHAR(255) NULL,
    `Dnvaltrd` VARCHAR(255) NULL,
    `Dsmvosd` VARCHAR(255) NULL,
    `Dsmvtll` VARCHAR(255) NULL,
    `Dretwd` VARCHAR(255) NULL,
    `Dretnd` VARCHAR(255) NULL,
    `Adjprcwd` VARCHAR(255) NULL,
    `Adjprcnd` VARCHAR(255) NULL,
    `Markettype` VARCHAR(255) NULL,
    `Capchgdt` VARCHAR(255) NULL,
    `Trdsta` VARCHAR(255) NULL,
    `Ahshrtrd_D` VARCHAR(255) NULL,
    `Ahvaltrd_D` VARCHAR(255) NULL,
    `PreClosePrice` VARCHAR(255) NULL,
    `ChangeRatio` VARCHAR(255) NULL,

    INDEX `sy_clsprc`(`Clsprc`),
    INDEX `sy_stkcd`(`Stkcd`),
    INDEX `sy_trddt`(`Trddt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

