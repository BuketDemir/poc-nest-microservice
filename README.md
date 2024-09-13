poc-nest-microservices/
├── prisma/
│   ├── schema.prisma                # In-memory veritabanı için Prisma şeması
├── src/
│   ├── app.module.ts                # Ana modül, mikroservis modülleri buradan dahil edilir
│   ├── microservices/               # Mikroservisler için ana klasör
│   │   ├── example/
│   │   │   ├── example.module.ts    # Example mikroservisi için modül
│   │   │   ├── example.controller.ts # CRUD işlemleri için controller
│   │   │   ├── example.service.ts   # CRUD işlemleri için servis
│   ├── guards/                      # Authorization guard'ları
│   │   └── auth.guard.ts            # Token doğrulama için guard
│   ├── prisma/                      # Prisma servisi
│   │   └── prisma.service.ts        # Prisma veritabanı bağlantı servisi
├── test/
│   ├── example.controller.spec.ts   # Controller için CRUD testleri
│   ├── example.service.spec.ts      # Servis için CRUD testleri
│   ├── auth.guard.spec.ts           # Guard için test
│   └── e2e/
│       └── app.e2e-spec.ts          # E2E testleri
├── package.json                     # Proje bağımlılıkları ve betikleri
└── jest.config.js                   # Jest test framework'ü yapılandırması
