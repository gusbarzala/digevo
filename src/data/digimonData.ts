export type ScreenId =
  | 'inicio'
  | 'jugar'
  | 'batalla'
  | 'companeros'
  | 'digevol'
  | 'lineas'
  | 'atacar'
  | 'escudo'
  | 'especial'
  | 'inventario'
  | 'villanos'
  | 'villano-poder';

export const IMAGES = {
  taiAgumonHero:
    'https://lh3.googleusercontent.com/aida/ALJJyrCsvhZ1Rb7AxxB3I4E_MH0tFD2Qka9SIoKXadNvSpfhujCrARUHIPVCmiSCn-w3DEN-MUwaMLK5N4QL7IRYL_Xd8FI3rgroY2ymKs56HYtGNHdx7yClZDHJk1w7D5_VX7MedbjdCWnYWLZOP9TsOJSyQeoZefbemDhA77w5quqYXJRKgBBHmQlAziO4UTQNn3iWnzicRezzTy9EcYCtk3zpEpaHPKyVjrnwKi31IjqQPrZR1pagEHmreA',
  agumonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrC-zxDL2LR31v4ywKjA-zs8kB9fv0i_PjqYFso-7H6GiK2_a0DdREl_z_Idy-lIllqTzCe5GPB6tbmpy5DuF4Kk-1lvm454iT34pnc7NG4K77ZKpf3Kg3KZGkOVGXCFzS9nbXIebWRJCG9uKvig51kCURQSMMlhQnzuu_i4AdMzQCLMGcJBr7-VnLcmBUqlijJBioqwtZdjpm78V7cp-CKnM1zSXIrI0PRNnynihRISPOdrDaK_IO8',
  greymonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrCWmV1xh6vRLLY-nUvPwX39OI9JLbB_PAJvyKni-IHobu1sjpVPYugYoQQIf91XqX5dd8AoBYqn_NYHzZ79A17ZDwfa51a40vEqLGau6ILVRdS7BESq2Xf_8FOfk68TthKtTAugBptfe39UdaqYg8HbesDsGmtP4p6KLWA6DZcEEFeNDdWdpox6w0LgrcxBuzIgx9uudeYGl1sa0o3Ra_qOL7GK7U5lHVcDCtl360FArod9xP8',
  metalGreymonEvo: '/src/assets/images/metalgreymon_evo_1795745169217.jpg',
  warGreymonEvo: '/src/assets/images/wargreymon_evo_1795745169017.jpg',
  omnimonEvo: '/src/assets/images/omnimon_evo_1795745170324.jpg',

  gabumonBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrBi2ZcEyp8WzbY_1lf6ntqK3ie0wbzJ8KNMCKxlJw86sp-_ntydN2dLaaE8H7nq4LGGlWM-hgvbSgNAgQVC8qmBlzhTt0xdtIlAfM0veW50V-xsB1aLUCw6hyYlCuLnfllR-SFDZ8pK2rIfWC59yOkbVDm4_jXprwfYVAiBEjvmx9lk43N6jGjSeuOlV2F1EzMStDxuMbDauehH3xaE_hjgQPiV4-GKXRGwCtwKRgZes8bjuSW5a2c',
  garurumonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrC-DkUxXAZfP7wmsBMjmEzhxaFSmawQKRGzZQCAWBpl8x1rmYvsTIcQcCb_GMzsflb2aYIs2DS29pQZNlfwlqacGGlnqBSX00y2aP_sbu_9cx1ixrariXjF2vwF4eUF6Z-rXIxqDOWFOByuAxo1JiNL9tH756JCufmGDukokJhvhf-QPOi3dHoo9najswkbkScptEjMTTWbiPG6sKdxJa3rpxvO12eWKlyQWsNVZjlxjp1TNO43Rg',
  wereGarurumonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrCKjbYBwqgmBxMUZ9r40CR4Mm4ECB0te93cyVKI3-IYyh5gtYNKZlDsDkOK3LHyCl_PNb4Oa_f8LotN-P89oyLajXJ7f8mJVi-dOMxseirq2wyE1t91hkdo75GQPPJ-wq4gOjAJjORSS0p130NepXDl1zX8WZzC2LkqaM_N_XhnFoZhId1LhW3GyKe30gFsB4Rg65mSyZUnPTOlh5w3fofQ4YE_jzjUs8aMvYjENw0YLLVPeADlgHrJVjha',
  metalGarurumonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrC8qX0b-noaeesEWFrKRZGTMV3hWGjDZD-HsdTzINGm6W_LWNOp3pn5-Q8nLwIwmkM5Lkh6QuAGJYYFUU73BFrMGIPLZyiYPt1Ilbv9z7EKwdRCoeqBOPM7HGgV1gIJbZ21nAlKi5ZGY-89rORXwNhy7lfpSOy6fzMG-T1nrx_4SkYcowlnKPojESlDdC1DmeSLND7UAeCgf4cwg_6kaQGe-98OTO6lZ8a60lqhsZm9jmyqD11-X4R4oJ4IBA',

  biyomonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrBLImb9dYcBJ1M-AhhnOp0niMboSeTvv54PlfdFmb9a6KFZg7b3aSt-4VFABNn5Prw_RKszwhPJRS--OWEZElfmpQpSofNhLl7lcBvpWHlllqqzijYQYUI1jzmWh_3rZC_kggn9YJKdSHKEqd2ZFJnvnGsQU9IFnWl37Xgk_7sy6OZVQhZtWO5nENxGBpZXc2s1nq2OvsTvmL1C7RcOiuLBDfC_7X_ugnDb8Ka5MIImxdJakgbgagZwnQ',
  birdramonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrCfLoD4g3iAzIngv05RVafrOTBX-Zsxjgg0earEB9VT63wmpobHTE38r2z6Iwq92aOuwN2scbA_mmiPSglFtZKvLtUXkZt2Bc08pwrRqmOjRfsacVI0jGRGjwD-49XX1SerlxM6IdDnUwEaxYlqZP0wJNuEJMvWZgkfDttiKmijN3E34MBRgsj90gUOt1kICQx5waddfH-7BthsUkmi508DIDT7vHurnxAct2ieBVUhnHtF6dXm',
  garudamonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrDCnto7v9imKoPKpwgT8Wv4bUr6IwIay6851BkEBtjofDoYS85cXLY63pVZy9tvzG7ioaVby1TtF0ZlM7LIVDoInw5W5180leQzwpBWK3kzo30ucYUr2tQo_iKX82t43-MbKrR6wjlRtx0xyQYsqV_p8uNwxikGF6R5CWSLi242H6ker-JO1FaHbkwkeLKZVYVp7C4dv0ksZtodkUHREXg1OhUa54lrsVwhZuZJAKy3bjODS_G3Qw',

  tentomonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrCXaL4EW3c2efQ-VsHu6juxe7VRlsukW96g1oFNaZUhntfZxsP_nJl0o25z0VHzG8w_Xj1nCyAl7IoqVb5Ksr_FkcarliA2eQmuH5D5YX9YgUItL7WPuuA5sBoBBIW1OmGscrGYU4dDhWo6DFcugKk2Nn46t3R6sipMtvXW21wvXRTc6PQNMZk9KnYgkzD7rHDzdldMowaU7Fz_bf0RajE0bBwyk5_kAVmGO_pirpkib_aT3fN64ZiEvUM',
  kabuterimonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrAC8RpnvIxzGQKxRXsAuEj43DIWS7BWr6ktjkx8tADRgP6Wm18KXFF-HKUBHf_-hyQnwxA287QRROuhhQqS3AMiwIIAYqgrsqf64bRqMYGzjDjXp7f7aq4a8RcNTzDufFCK5Sdmgg90DsIzh5c39BfrcBDDhFj4IN4dZMb_lOjkM5FBDZyXmfEueZPDjD9AqHVTfwH-TG4hLZz_b88rwBXfCHH3Pu2Tkm4m3j-tKQPR5pYqWzdSTpRa',
  megaKabuterimonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrBnEqh1E4cxoFDk7OVFSpEpgtg35rFhJevkF-jWhuHmatyqezCP7HDQFGP9EP3zr4fQ8eQRx1m7NdIJaeGtQZBo0l2hykTpK9IxXjAk2wC8-7nPm0B76d_txCyp1_R9P1nuJGQKbXdVsefjK1UDdNkK6C0ZjZH42jgxSow39ia7a2VVdbCiZaFfkYAXDaqMYsijHt-ivNDzkMY_ECFCuVESnmpS6foV5DpQiW-yxf4xOgdaCMbPCjpmqONqydg',

  palmonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrAOoH0XP0ha4dHrMJzkGwDf4EbWyksrOoL1MjH0YCPH3vgxA35FH-4uiGTuBq57WSqeAhcc5e4Kol6PvAy3g-Vjm_D7cf-XGnunwAMF10sJQBczJSt6pQBgPT_nyRQodQ0rxgLHWKBM44gUhiwBo48ZfOf1FPxu6t_FNUllvk38RaR6NUId_JmEOjXNhCzX1LpzZqsMOQ9emagUYMTyXcVZqJYVKGRUueq6ZxgLal7Cz-F67k9C9y8f',
  togemonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrCs16TJ8JGQ1upyKheOH9iS14g6GLO9GbuZKHMyEQAE1S_oeZjA_SjTRbgFvoKcsVE33OAiG5IorpfCB8G2VhFSlusmhRULi9-f_hm4ZnDlN8nO8B797dj4casfCiS8oo8tc4Mc3B8CB-dyOvT-5TmI5jgeiY39aZZ5pkVvhI48UpXg7b-9dQ90oYsrwHZ4QSHZdE1ScG8KP9v9WagVEbAHt7N79QKDTu93u-St3MjnVstD2Z0',
  lillymonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrAc9s_FlKdi9zEfqzLDPD-NgwfsZyxGUJ8H8T9q_sQJLckzOo28EkwhaUqdTCEF0J7KszcVhJRvPMxcQbjalB6Fj3O4hDE_GXNp3RGFi7SdGtMllnoiNA4Qw2243HDyiUFwN2FC3Ux1MRJE_TL_6ACASgWOnF6nS7y7kbbrz3pS1GRmpjfp4-ABglL40vxBmMAPAJ6dKZurCQoXNem1vS4vueEObZISylhYSDuSiu__FHEIrWg',

  gomamonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrBGju-6RLIYFqp35LeaLIe3SJoH4BB9ylC9QHZciRvXJoqxla6O_aL3p63BZLEgtVC7blVwOWtdT_kvIy-cLu6EEoq4UtISfKuXSW_WG-U6E8VVHn6OgLUzFmfTK4EmbERyBYBbXhfnh2ylmiOSlf6UjNow_aDik5H4AfOlZdKfWKyoRwPNj2Hlr55wVEfvmFC6u6T6zq2nEZ-bD_WcX-16yOOrx2I4ff3ECr_PuR0oiiT2DSDMY4mY',
  ikkakumonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrB7S1UxNvBi6wDq-Mul_Riskg1dqTzGLiIeOUO0vZjCTQk59pJKWjXPgAsLxEAWo1oWXCn2ySmn06g9WT2_IqSLoxXkDpjMsyEgA0IsdZ-ZD9yDpipzpmdOncoScyt_AjcQ0eZs7rEDNQrws-fTdAHTWgLObF8tCvfId_7TBiA5lvmGNxuAPV5Vv5U1pGvdz3_gfAQ838-CdwSd-SBP54D5BFiywi4qdfgT-CT5p1VfS9MY2fJV',
  zudomonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrAC5hMIgJkVIn0_wFHMpTSG6PRQRfWQi2SRDz3tX7z-nm-LrP0lMYqAyZ0EmlPYClItfbz0K5NSGQohq240cgAnCA5PeP7EfUsROx56ojIt39CtxAQ_4caoPeqyWcAqA54U-_TOOBhyGJdOMromZZFpAltghsgTVnhKYanZwTsKu44cd5rYoL3USt7Q3Xg-UmjNdCTI3RCXXmFiGTAmY_hfz2gLjBPF-o9uvGNEw5ngK9ljtss',

  patamonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrC-NgKib0dw4YvQT_3OBz48Wm4RTafCAyZYc14RPtICKKK8-fe5eUmwLzdBgQkxZWL2M2nqznoUb3hGRRMTP612719MVJYQTGRI3WlKRxgZXzXclxwV-1DGwySbyWPOjXrQDvcIdry7rNgCgJwpo-fidBuiIDZIUZY2btaTFFglSBpU0jEoSOGB9GJO-jeTfHCHiFINYl_C5W05QZkuSHcV49pBcsnr5hrmAO_-t8opYrYTq-UURYtyKA',
  angemonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrAHES_igfdW_EHN4NCwixTC28eLM_O4dnynMyJyeQzEa0MTMiLvhq_SqU5R4F29VoVI6OicI55kdyraR9wZpEeVN4cGj0aVhPQvN0UFyiqs2bCL1NMCJHpOgU57TWW82NUXDaO6_nwpyrZhVNVHJa5yM_IIP5r1oJkmAGYokXvcoar6EriVs2TBdQK1E8fdBfpr_OgWF7f8S6bK7SimsP14faX1mwrRacEd66hts-JA8nDWa1w',

  gatomonPartner:
    'https://lh3.googleusercontent.com/aida/ALJJyrCXrimLg9jEIQ98kLjaTcmOyDJsITIAxHuXCOwXh3pGdvrZtxmoLg3MZPO7NThWnpsL2a_YsRaWVW3yawzRJ-rkqplVFaOwX9mYo-CVheFy7ZHXgDh7VUlI9xOnpyg6QIyBxBtx5rgZpZKOcQ5SSVHkLWGRZ7yiPE2K1gZebPCTVWQTWEgji-c6VqzGd4zpy2y-b49zol_av4gHKPsChS8624EHCbNrqfs0yfI1WgMdlWFYn5fCID63',
  angewomonEvo:
    'https://lh3.googleusercontent.com/aida/ALJJyrAj80hmzUtwdx3hcbJ9DW-KGKYx-npjJ2gv6MfSBeY7r2SrivvaQVtTt85myBijR4v5KHJbaYzsEbd0N-MtUSR7sfbF-aT_QdIaNIBvdXCO894s8qBA01UNjqCCrnFSlthwkbguRaAxEQQxijLN-TaW9sHpHW5ZSdhwy18cNFHzlnGQkKop8xqXyGmHgKy3HyJtCoEk2yEBRDSccr7iExHyqxwruFGn9UvhR1sVSjM6mulq3SXX8Q',

  taiKid:
    'https://lh3.googleusercontent.com/aida/ALJJyrBC9X0Ya2-RlO9n1J3dx5C-PjGhkC_devC6W-kZqY-3qMsn1qD5axZAjGP65qeyo8bJahwnDpx6RsbsRlAZBg8emXICpT0YeDg9ENJp-mAdldcnL-vV0CMyMfiVD6Ry2tfYlqRrySrrVZ7_0FftYwjRz5YTx5yIztdeATsl_nXiS4-z5MHJfYYu0DeU3066oVDL78THMQb69DLO_zXUO2lFh8TOE-k_L90elHLtJE6p3w',
  mimiKid:
    'https://lh3.googleusercontent.com/aida/ALJJyrCiaUPUchI_mHAPPjQZe0LUK_ZoOUTXwSBapst3rZsrt2xo-BbmPOv6ysgkUfRw1fAcf2eSHKDG5x5IYztEmVa_jMVUjTyISLH0jSYfUqIW4AWDVhC5qSr2YoCpzeWvC_j_zYtI3YQzvH-bOkSf9g3c8PIRzy4cCVCgz2XGxubTHtzfvpd_JHuEnS7MsnGEoaN0cy_BDqITsfuEvPMooOdbNgyvNJro5FLWmqHrZhAB4MU',
  soraKid:
    'https://lh3.googleusercontent.com/aida/ALJJyrCHcw2GY1kxwNILKLLA46kqe0lYg2wZ-iHZHzaxLzYuMu0lYr8ts8IGg7JwFqM63jwFr_9nqFnijVQDQuh7TFXf5BTVvHp5oEQcoL-5DascqiGwm8AdbZ6e2paHscwt-MOyU_dz5IaekqZuo2tG2__vFXfAzcJLLIs4E2hVKL3GV3TydtFPOG4Pq0-IvWsJlvgdMwPtYPuIYRAVIelN679YRdBO_dfbCjKFpxACKk3jVA',

  crestsShowcase:
    'https://lh3.googleusercontent.com/aida/ALJJyrD9Q3zubjPgUFp3l11ptVQvvXG78oBRIXNwL4VykmwwHCJzrECu4F1DmwXxphitLSqu8uAxbKvbUOEOgi_coMsz5LfgIFG05n7QSstcq7uDCjnHNOAqtjT_0ZgbJsrrBLHLiTEKk196CoE0cvqMz1W1VO94OiHLncmTLXGVtG98ki8gxaCds8tDtbtX4O-AGTRStiTMEysQqSGDc2_Rm5gUTDVix5lkpiN-zWzKb0fxv_ko5y9ML9GDHFQ',
  crestValor:
    'https://lh3.googleusercontent.com/aida/ALJJyrBHu-R4HXlDMo4HMrtAT_vNe5Asrw4r49SQvmZbrlSX1AikSEUzB6_LQUDIIJdUeUDj_0yx85JUv2b3NpQS-SvnJ__-IZRQ-NILBDMUgRaM9DnaeiRkb9jNmoDQ-_YE--7HzQPqpq4RNpoBOFNpZqrva3AzYWXvJZFLZqMlC1d2mRDsau6QYHBg4PwIqUwmh_6Hqv-sd6brpetLzbjNeeJLAa71H3uD1AN02MP4DOz-z0SMqQ',
  crestAmistad:
    'https://lh3.googleusercontent.com/aida/ALJJyrBSsmeLHKCo-xXEmCJhkxenlspxwCEiKmVU065tpJ2HlqKxmQmt-rl11MiQ-lbRo3CvlTXi8Qd6v1xEyQ9kaWzNOE_KYBFzV6NiUxTCXorY2_I3-0116aYFuCKlbhjNB-KoNznureitXjcR0JgqlEAeX05n-iRcoCvZqbRp9ZDzXAfzQkLnXwWqL_FPqnjVv5U-yZVtuoHc70lrNxZD48ckQJjSp1KndLaKHWwNCB1j2kuvEBOa',
  crestAmor:
    'https://lh3.googleusercontent.com/aida/ALJJyrBtxXLl2ejaI8aFRf4X5MbhH-T5upfzfK-mK5IIykkvTv23hptaIzraj87Y33rvcVut8QikGNKtl7QHNcOTHofrNbU10pTHxxGBvvgdmufjQgpjg6SFfSVI3OLbwiWwVcG9vTzdS6Salfl_t64z2bHTcQoxXOiN1M0G8u7wgc6rsM1g4MsuyYI8kZD8o2hjQ-hsxr7yYmSOKuN3qhqECRlgyuR-OAmvpe4dXEDQppx7iMY4PA',
  crestConocimiento:
    'https://lh3.googleusercontent.com/aida/ALJJyrBJCJTWiPAu8_EgiSlWmypuFtWNPifny2zjCLsnTa39Tgu2DFKSxqWM1M3grjEkh7CNuLJeU3JxH8BEVNFVg3-Q6igOnq1p7SBkeH69A6O0O1RbiP8CKzWOzRcMkBn3WaB5d7EBeaKBbRcst92WT6ZA5_wJz3hw6vUE5S7kECuuDZMW9Qkyf-LpF-aINbSWYjAuG2TeIqKo7ce6Kx4xrzNaYrEYf3r3OrWGPl78TIUX8Ip2XG2XZxBl47iumg',
  crestPureza:
    'https://lh3.googleusercontent.com/aida/ALJJyrCD0YzA3_eBiUIztrI6q28dJBCDDQ3v1TslHGzxNJFOxq5ZUv3Yv4k2GkWv3XvHbbBz9sWF4p1q_jUHj_SWlt9qeKE2rNSFUOn3gEU-B3RRsGV2vcwisKLRU7z46G89kJ3NTc6Fk0umKUzd4uTC-g-kHUTHkmbCjgAkGl3g2mE5HSGI5DPe7iXLL1Tpq_9I-2dP2zkjTncIzAK3cKiypQ9ENYIN84nkdJix42vwFPQzo23BTAHD',
  crestSinceridad:
    'https://lh3.googleusercontent.com/aida/ALJJyrAV2FdBtB6zbWLsvt7Haj7d6NWDYj0UpxCYeYUN5CyGZnOOqtSsho2ZS31MmS0TW7CDIX7X1SUcHPIunu-TPMO1255mP4e8nYjKxlaj8uQHhUTX7ivm4F29mOZYXxWr0aqKavBHjRTe6xDxCPyMEaAiCRzasRaGbPMxuZ5fIo56KOsGmqyqnLk1A_c4hp7ip4QqOm_bKa57TJjbp9Ip0_xrzGTyrm7tVS3rsRt3HE81JYcl3M0NWAjHaQE',
  crestEsperanza:
    'https://lh3.googleusercontent.com/aida/ALJJyrC9tziBnbAMWWurn8Cdst8hpPoXCi1vK1S8VsATJg7HpVd4wL7OO40oi8OuS5SGcvnXAo8dyhQDZS9exxCOw6u-cXI1__7WoHwowNVRVUlIKzO3bCOQYbclqY3f51DzdIlfzQARne1jZMaaiPvhl6yeSuTVRZnaE0Z99aezs-znqu8uzfSnd3YCIcmt-DSMnjyE-q02CWmBM3D2SKzhYV8TItfQYneO_aFjh2FHgsLwXWGLVeEGi8S2sg',
  crestLuz:
    'https://lh3.googleusercontent.com/aida/ALJJyrCcjGI1R_BklOBrRDlhPsOgNmyMGH6Gaafdsl6MOHJ62K-_Fnx8xwAAZH35rfpvGQoIT0WHc9TKxYq5S2jT5XfEvYgFU0ulctgfQjxj1nH6c85WSD7DMAek-UnKjRpC2XQxGwF2N1YH7-05PkpUGGjXEdZ1tF_H1Dp_vfiU6zYn_6hCdBKv7A4QwPShBgIGHlQpLacmQFPtJWrxh-goSMM8OCFo0-EH_OzfDzU-BwRph4zJ',

  devimonBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrCGwzSfI-qgba_0mTD3QdY68mHVjyfLSUdtpgKMDWepWdXmQmGPOzIZu03v_Jsp1F19cED2W4GGg2sJW-9RXCXeaymumM0e3aA_SWkXX6xyUssmvBp7bTbdNis6rKGaKMsYDKwL8W6S-yJ9QQsmfexoZxteT2UwRVCsK6cvlNvO6NDmDyOPi5zQDmTu9ag_wZNyp8ZC6ZMl0DMXxvk2wj3_iXRRkrZauwcGXk5zskz26Nx_-vRiTd8',
  etemonBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrB96-sE66En1UjRmEXifXv8GYjPW04eWDAccjlL9lx6iWQfYKf42N2S6y_idyKEUyIlh9HJ15dcUoL4DQPkKhgpYME2JApP4dWMdoOztnOy6uqu9EzPIooz1k0cgJiYNUZv12njkBYUoo9zIHWLVGae3DkpantoT4rSUQ83zSM6YmsA5zTGsqm9MPpBWY8Eac1TELMPI1A0fMUxt_5hX1Lo8xc9Jz_of_y3MOhQHHTzOT88tE6vMQ',
  myotismonBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrAKjuxSdNeEj3wQ-xETH0WxmWxVb3Zs3QrQAxFz0yVOU-A6jme2r2QKLAnzxYIl62bf2QpPz21sPHGB8eCmTUz3xEbaCx7e6Okls7vZ_St8hX5MihUTVe6HZEp-xMfnQbcnVL6N4ysEi9lbiBC1xuzoajsk0j5IN_eR-qHAWxCIWCc3ritFQ8EJzCJv84iFB6wYZGKXyHxK3L9bwlppz5xyzfssbwgsLkayyTY_3LZ8Z4iPCSdbEC0XsQ',
  amosOscurosBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrDnD1B1SLEXOJoiYJwD-x2ZpzGoNzX9fewB-wmedw-lCm96udYt3T0H6FtqDuy9cw4Fn9v1XzM082uFMt8MdPOksGRTJNRXvLIco0YplIrTd1nB5LvRjRogz15oj5_sUrEAuEtdmCKHe_bgd-oo1xxQA6sPWM0qUMZEGP1DZvo8YeW-zcM0E6oeZOb6vp7Pj4NftZZgQnm2k-Z9lUtyrPyFwdW0NNedNi9F2bEwhESygPCOzXtVIEKeBna1JQ',
  apocalymonBattle:
    'https://lh3.googleusercontent.com/aida/ALJJyrBkuejY-D3ZdL-lKF4g5y7qFuzYT3PBAx7CeS4cXq4Co4-ImpxGQ-txN23I0JkrSaiklsymZSK3YLvA7vKhajpnC9YPECJ6WQci3xq6YUG4D7cXnFvYVpliuQmnljHA9TLmaGzCcMGXd-XgztMai3Xm6KmCkB_lFvTNOb4ee9Oql7mCIT91Jq0KkNWyJ8V62wrXPYqxsjvVqhsWuSYXStEROhIo1xEvUxwJfhF4J17xY1nLQ0PsGVRBvnzn',

  pumpkinmonMonster:
    'https://lh3.googleusercontent.com/aida/ALJJyrDbjCIw6K_hLkFk5LkPTPLmOxmsTu26K2zdrxO_F7rhY1l0MJb8v2MxzajuMzNaY8yw4NOWXbkIIU6V4Kl_QdgfGxeXjkgFtx74JPit5PSAFk2E5Vcz1kgBItIFL-ZoyhT7iKz3Jzb9PmIVYVd1Nj5X0zcyDFrXPxcyHBEfbtENw9T9b4o9EAmQDajEVuhg3L_4TTqGnQR2mfaMtn7eflQf9wGGsKZWqLkEkrZAZWe_eSuSvmssbQ_NdG3G6Q',
  gotsumonMonster:
    'https://lh3.googleusercontent.com/aida/ALJJyrAAfMfbt7nLMvoQ5O-aNXSkX2olmNF7Gql-WkQg1xnIbr7__Crt8H2R9fERaT9pBS3SuugCPHM_aogwtPMvq6hfqeKxW4DFregAhrC1RRSvbuE7NSDzfVlc4XcnBvL0FXXajSJmJB5w3RKsGwCqkppocPLur0RyNbHgB2N7r1csnRSEHc9BmxrWL6mmN3sEdu68MmnISEc66y6ckSRJHwKcB3jOZolm6_VOk_Psp_3XdJzlJWwN3ETXBQ8',
  wizardmonMonster:
    'https://lh3.googleusercontent.com/aida/ALJJyrAdDfW0MIHbxhEq3LTvAg7R8JYzdh199JFKLli3T4pr3bOHAKpM7dK14ZA58k-mp6EmVFUSfn1SncoyKPzLS-yh1RkPH3yqHTL4HpO0oBws-b2MsqBcQldZDF1ODvrdigTBD7MAfc1IxUJv8alD1Xb5s6ewuQ0RTnGWlmyZzDUZrkMeAc_tBRSlSKrxSzxwur8WP7wBfDIPlxqDQJODVG1wRJ7X4L0oH4HuF-AbAFX7n1qJY75pv6dnmG4R',
} as const;

export interface PartnerEvolutionOption {
  stage: number;
  label: string;
  form: string;
  img: string;
  atk: number;
  move: string;
}

export interface PartnerData {
  id: string;
  tamer: string;
  tamerTitle: string;
  baseForm: string;
  level: number;
  maxHp: number;
  maxEp: number;
  evolutions: PartnerEvolutionOption[];
}

export const PARTNERS: PartnerData[] = [
  {
    id: 'agumon',
    tamer: 'Tai',
    tamerTitle: 'Niño',
    baseForm: 'Agumon',
    level: 2,
    maxHp: 100,
    maxEp: 50,
    evolutions: [
      { stage: 1, label: '1 · Agumon', form: 'Agumon', img: IMAGES.agumonPartner, atk: 20, move: 'Llama Bebé' },
      { stage: 2, label: '2 · Greymon', form: 'Greymon', img: IMAGES.greymonEvo, atk: 34, move: 'Mega Flama' },
      { stage: 3, label: '3 · MetalGreymon', form: 'MetalGreymon', img: IMAGES.metalGreymonEvo, atk: 46, move: 'Giga Destructor' },
      { stage: 4, label: '4 · WarGreymon', form: 'WarGreymon', img: IMAGES.warGreymonEvo, atk: 60, move: 'Fuerza Terra' },
      { stage: 5, label: '5 · Omnimon', form: 'Omnimon', img: IMAGES.omnimonEvo, atk: 78, move: 'Espada Trascendente' },
    ],
  },
  {
    id: 'gabumon',
    tamer: 'Matt',
    tamerTitle: 'Niño',
    baseForm: 'Gabumon',
    level: 2,
    maxHp: 100,
    maxEp: 50,
    evolutions: [
      { stage: 1, label: '1 · Gabumon', form: 'Gabumon', img: IMAGES.gabumonBattle, atk: 18, move: 'Fuego Azul' },
      { stage: 2, label: '2 · Garurumon', form: 'Garurumon', img: IMAGES.garurumonEvo, atk: 32, move: 'Aullido de Fuego' },
      { stage: 3, label: '3 · WereGaruru', form: 'WereGarurumon', img: IMAGES.wereGarurumonEvo, atk: 45, move: 'Garra de Lobo' },
      { stage: 4, label: '4 · MetalGaruru', form: 'MetalGarurumon', img: IMAGES.metalGarurumonEvo, atk: 58, move: 'Aliento Congelante' },
      { stage: 5, label: '5 · Omnimon', form: 'Omnimon', img: IMAGES.omnimonEvo, atk: 78, move: 'Espada Trascendente' },
    ],
  },
  {
    id: 'biyomon',
    tamer: 'Sora',
    tamerTitle: 'Niña',
    baseForm: 'Biyomon',
    level: 2,
    maxHp: 95,
    maxEp: 55,
    evolutions: [
      { stage: 1, label: '1 · Biyomon', form: 'Biyomon', img: IMAGES.biyomonPartner, atk: 18, move: 'Fuego Mágico' },
      { stage: 2, label: '2 · Birdramon', form: 'Birdramon', img: IMAGES.birdramonEvo, atk: 31, move: 'Alas Meteoro' },
      { stage: 3, label: '3 · Garudamon', form: 'Garudamon', img: IMAGES.garudamonEvo, atk: 44, move: 'Ala de Sombras' },
      { stage: 4, label: '4 · Phoenixmon', form: 'Phoenixmon', img: IMAGES.birdramonEvo, atk: 56, move: 'Explosión Solar' },
      { stage: 5, label: '5 · Valkyrimon', form: 'Valkyrimon', img: IMAGES.garudamonEvo, atk: 68, move: 'Flecha Auroral' },
    ],
  },
  {
    id: 'tentomon',
    tamer: 'Izzy',
    tamerTitle: 'Niño',
    baseForm: 'Tentomon',
    level: 2,
    maxHp: 95,
    maxEp: 60,
    evolutions: [
      { stage: 1, label: '1 · Tentomon', form: 'Tentomon', img: IMAGES.tentomonPartner, atk: 17, move: 'Súper Trueno' },
      { stage: 2, label: '2 · Kabuteri', form: 'Kabuterimon', img: IMAGES.kabuterimonEvo, atk: 32, move: 'Electro Shocker' },
      { stage: 3, label: '3 · MegaKabuteri', form: 'MegaKabuterimon', img: IMAGES.megaKabuterimonEvo, atk: 45, move: 'Cuerno Destructor' },
      { stage: 4, label: '4 · H.Kabuteri', form: 'HerculesKabuterimon', img: IMAGES.megaKabuterimonEvo, atk: 58, move: 'Mega Electro' },
      { stage: 5, label: '5 · TyrantKabuteri', form: 'TyrantKabuterimon', img: IMAGES.kabuterimonEvo, atk: 68, move: 'Brillo Salvaje' },
    ],
  },
  {
    id: 'palmon',
    tamer: 'Mimi',
    tamerTitle: 'Niña',
    baseForm: 'Palmon',
    level: 2,
    maxHp: 95,
    maxEp: 55,
    evolutions: [
      { stage: 1, label: '1 · Palmon', form: 'Palmon', img: IMAGES.palmonPartner, atk: 17, move: 'Hiedra Venenosa' },
      { stage: 2, label: '2 · Togemon', form: 'Togemon', img: IMAGES.togemonEvo, atk: 30, move: 'Espinas Voladoras' },
      { stage: 3, label: '3 · Lillymon', form: 'Lillymon', img: IMAGES.lillymonEvo, atk: 44, move: 'Cañón de Flores' },
      { stage: 4, label: '4 · Rosemon', form: 'Rosemon', img: IMAGES.lillymonEvo, atk: 56, move: 'Látigo de Espinas' },
      { stage: 5, label: '5 · Rosemon BM', form: 'Rosemon BM', img: IMAGES.lillymonEvo, atk: 68, move: 'Ágape Explosivo' },
    ],
  },
  {
    id: 'gomamon',
    tamer: 'Joe',
    tamerTitle: 'Niño',
    baseForm: 'Gomamon',
    level: 2,
    maxHp: 105,
    maxEp: 50,
    evolutions: [
      { stage: 1, label: '1 · Gomamon', form: 'Gomamon', img: IMAGES.gomamonPartner, atk: 17, move: 'Peces Marchando' },
      { stage: 2, label: '2 · Ikkakumon', form: 'Ikkakumon', img: IMAGES.ikkakumonEvo, atk: 32, move: 'Torpedo Arpón' },
      { stage: 3, label: '3 · Zudomon', form: 'Zudomon', img: IMAGES.zudomonEvo, atk: 46, move: 'Martillo Vulcano' },
      { stage: 4, label: '4 · Vikemon', form: 'Vikemon', img: IMAGES.zudomonEvo, atk: 58, move: 'Ventisca Ártica' },
      { stage: 5, label: '5 · Plesiomon', form: 'Plesiomon', img: IMAGES.ikkakumonEvo, atk: 66, move: 'Canto Triste' },
    ],
  },
  {
    id: 'patamon',
    tamer: 'T.K.',
    tamerTitle: 'Niño',
    baseForm: 'Patamon',
    level: 2,
    maxHp: 90,
    maxEp: 60,
    evolutions: [
      { stage: 1, label: '1 · Patamon', form: 'Patamon', img: IMAGES.patamonPartner, atk: 16, move: 'Burbuja de Aire' },
      { stage: 2, label: '2 · Angemon', form: 'Angemon', img: IMAGES.angemonEvo, atk: 38, move: 'Puño del Destino' },
      { stage: 3, label: '3 · MagnaAngemon', form: 'MagnaAngemon', img: IMAGES.angemonEvo, atk: 52, move: 'Puerta del Destino' },
      { stage: 4, label: '4 · Seraphimon', form: 'Seraphimon', img: IMAGES.angemonEvo, atk: 64, move: 'Siete Cielos' },
      { stage: 5, label: '5 · Goldramon', form: 'Goldramon', img: IMAGES.angemonEvo, atk: 70, move: 'Puño Dorado' },
    ],
  },
  {
    id: 'gatomon',
    tamer: 'Kari',
    tamerTitle: 'Niña',
    baseForm: 'Gatomon',
    level: 3,
    maxHp: 100,
    maxEp: 55,
    evolutions: [
      { stage: 1, label: '1 · Gatomon', form: 'Gatomon', img: IMAGES.gatomonPartner, atk: 24, move: 'Golpe de Gato' },
      { stage: 2, label: '2 · Angewomon', form: 'Angewomon', img: IMAGES.angewomonEvo, atk: 42, move: 'Flecha Celestial' },
      { stage: 3, label: '3 · Magnadramon', form: 'Magnadramon', img: IMAGES.angewomonEvo, atk: 55, move: 'Fuego Sagrado' },
      { stage: 4, label: '4 · Ophanimon', form: 'Ophanimon', img: IMAGES.angewomonEvo, atk: 64, move: 'Cristal Edén' },
      { stage: 5, label: '5 · Mastemon', form: 'Mastemon', img: IMAGES.angewomonEvo, atk: 74, move: 'Caos Degradado' },
    ],
  },
];

export interface AgumonForm {
  name: string;
  label: string;
  stage: string;
  atk: string;
  img: string;
  colSpan?: boolean;
}

export const AGUMON_FORMS: AgumonForm[] = [
  { name: 'BOTAMON', label: '1. Botamon', stage: 'BEBÉ I · NV. 01', atk: 'Burbujas Ácidas', img: IMAGES.agumonPartner },
  { name: 'KOROMON', label: '2. Koromon', stage: 'BEBÉ II · NV. 02', atk: 'Burbuja de Fuego', img: IMAGES.agumonPartner },
  { name: 'AGUMON', label: '3. Agumon', stage: 'NOVATO · NV. 03', atk: 'Llama Bebé', img: IMAGES.agumonPartner },
  { name: 'GREYMON', label: '4. Greymon', stage: 'CAMPEÓN · NV. 05', atk: 'Mega Llama', img: IMAGES.greymonEvo },
  { name: 'METALGREYMON', label: '5. MetalGreymon', stage: 'ULTRA · NV. 08', atk: 'Giga Destructor', img: IMAGES.metalGreymonEvo },
  { name: 'SKULLGREYMON', label: '6. SkullGreymon', stage: 'ULTRA OSCURO · NV. 08', atk: 'Disparo Cero', img: IMAGES.greymonEvo },
  { name: 'WARGREYMON', label: '7. WarGreymon', stage: 'MEGA · NV. 12', atk: 'Fuerza Terra', img: IMAGES.warGreymonEvo },
  { name: 'BLITZGREYMON', label: '8. BlitzGreymon', stage: 'MEGA · NV. 12', atk: 'Plasma Estaca', img: IMAGES.warGreymonEvo },
  { name: 'OMNIMON', label: '9. Omnimon (Agumon + Gabumon)', stage: 'FUSIÓN · NV. 15', atk: 'Espada Trascendente', img: IMAGES.omnimonEvo, colSpan: true },
];

export interface EvolutionLineStage {
  name: string;
  stage: string;
  atk: string;
  img: string;
}

export const OTHER_LINES: Record<string, { label: string; kid: string; stages: EvolutionLineStage[] }> = {
  gabumon: {
    label: 'Gabumon',
    kid: 'MATT',
    stages: [
      { name: 'PUNIMON', stage: 'BEBÉ I · MATT', atk: 'Burbujas Ácidas', img: IMAGES.gabumonBattle },
      { name: 'TSUNOMON', stage: 'BEBÉ II · MATT', atk: 'Burbujas', img: IMAGES.gabumonBattle },
      { name: 'GABUMON', stage: 'NOVATO · MATT', atk: 'Fuego Azul', img: IMAGES.gabumonBattle },
      { name: 'GARURUMON', stage: 'CAMPEÓN · MATT', atk: 'Aullido de Fuego', img: IMAGES.garurumonEvo },
      { name: 'WEREGARURUMON', stage: 'ULTRA · MATT', atk: 'Garra de Lobo', img: IMAGES.wereGarurumonEvo },
      { name: 'METALGARURUMON', stage: 'MEGA · MATT', atk: 'Aliento Congelante', img: IMAGES.metalGarurumonEvo },
    ],
  },
  palmon: {
    label: 'Palmon',
    kid: 'MIMI',
    stages: [
      { name: 'YURAMON', stage: 'BEBÉ I · MIMI', atk: 'Burbujas', img: IMAGES.palmonPartner },
      { name: 'TANEMON', stage: 'BEBÉ II · MIMI', atk: 'Semilla Ácida', img: IMAGES.palmonPartner },
      { name: 'PALMON', stage: 'NOVATO · MIMI', atk: 'Hiedra Venenosa', img: IMAGES.palmonPartner },
      { name: 'TOGEMON', stage: 'CAMPEÓN · MIMI', atk: 'Espinas Voladoras', img: IMAGES.togemonEvo },
      { name: 'LILLYMON', stage: 'ULTRA · MIMI', atk: 'Cañón de Flores', img: IMAGES.lillymonEvo },
      { name: 'ROSEMON', stage: 'MEGA · MIMI', atk: 'Látigo de Espinas', img: IMAGES.lillymonEvo },
    ],
  },
  biyomon: {
    label: 'Biyomon',
    kid: 'SORA',
    stages: [
      { name: 'NYOKIMON', stage: 'BEBÉ I · SORA', atk: 'Burbujas', img: IMAGES.biyomonPartner },
      { name: 'YOKOMON', stage: 'BEBÉ II · SORA', atk: 'Burbujas', img: IMAGES.biyomonPartner },
      { name: 'BIYOMON', stage: 'NOVATO · SORA', atk: 'Fuego Mágico', img: IMAGES.biyomonPartner },
      { name: 'BIRDRAMON', stage: 'CAMPEÓN · SORA', atk: 'Alas Meteoro', img: IMAGES.birdramonEvo },
      { name: 'GARUDAMON', stage: 'ULTRA · SORA', atk: 'Ala de Sombras', img: IMAGES.garudamonEvo },
      { name: 'PHOENIXMON', stage: 'MEGA · SORA', atk: 'Explosión Solar', img: IMAGES.garudamonEvo },
    ],
  },
  tentomon: {
    label: 'Tentomon',
    kid: 'IZZY',
    stages: [
      { name: 'PABUMON', stage: 'BEBÉ I · IZZY', atk: 'Burbujas', img: IMAGES.tentomonPartner },
      { name: 'MOTIMON', stage: 'BEBÉ II · IZZY', atk: 'Burbujas', img: IMAGES.tentomonPartner },
      { name: 'TENTOMON', stage: 'NOVATO · IZZY', atk: 'Súper Trueno', img: IMAGES.tentomonPartner },
      { name: 'KABUTERIMON', stage: 'CAMPEÓN · IZZY', atk: 'Electro Shocker', img: IMAGES.kabuterimonEvo },
      { name: 'MEGAKABUTERIMON', stage: 'ULTRA · IZZY', atk: 'Cuerno Destructor', img: IMAGES.megaKabuterimonEvo },
      { name: 'HERCULESKABUTERIMON', stage: 'MEGA · IZZY', atk: 'Mega Electro', img: IMAGES.megaKabuterimonEvo },
    ],
  },
  gomamon: {
    label: 'Gomamon',
    kid: 'JOE',
    stages: [
      { name: 'PICHIMON', stage: 'BEBÉ I · JOE', atk: 'Burbujas', img: IMAGES.gomamonPartner },
      { name: 'BUKAMON', stage: 'BEBÉ II · JOE', atk: 'Burbujas', img: IMAGES.gomamonPartner },
      { name: 'GOMAMON', stage: 'NOVATO · JOE', atk: 'Peces Marchando', img: IMAGES.gomamonPartner },
      { name: 'IKKAKUMON', stage: 'CAMPEÓN · JOE', atk: 'Torpedo Arpón', img: IMAGES.ikkakumonEvo },
      { name: 'ZUDOMON', stage: 'ULTRA · JOE', atk: 'Martillo Vulcano', img: IMAGES.zudomonEvo },
      { name: 'VIKEMON', stage: 'MEGA · JOE', atk: 'Ventisca Ártica', img: IMAGES.zudomonEvo },
    ],
  },
  patamon: {
    label: 'Patamon',
    kid: 'T.K.',
    stages: [
      { name: 'POYOMON', stage: 'BEBÉ I · T.K.', atk: 'Burbujas', img: IMAGES.patamonPartner },
      { name: 'TOKOMON', stage: 'BEBÉ II · T.K.', atk: 'Mordisco', img: IMAGES.patamonPartner },
      { name: 'PATAMON', stage: 'NOVATO · T.K.', atk: 'Burbuja de Aire', img: IMAGES.patamonPartner },
      { name: 'ANGEMON', stage: 'CAMPEÓN · T.K.', atk: 'Puño del Destino', img: IMAGES.angemonEvo },
      { name: 'MAGNAANGEMON', stage: 'ULTRA · T.K.', atk: 'Puerta del Destino', img: IMAGES.angemonEvo },
      { name: 'SERAPHIMON', stage: 'MEGA · T.K.', atk: 'Siete Cielos', img: IMAGES.angemonEvo },
    ],
  },
  gatomon: {
    label: 'Gatomon',
    kid: 'KARI',
    stages: [
      { name: 'SNOWBOTAMON', stage: 'BEBÉ I · KARI', atk: 'Nieve', img: IMAGES.gatomonPartner },
      { name: 'NYAROMON', stage: 'BEBÉ II · KARI', atk: 'Cola Látigo', img: IMAGES.gatomonPartner },
      { name: 'SALAMON', stage: 'NOVATO · KARI', atk: 'Aullido', img: IMAGES.gatomonPartner },
      { name: 'GATOMON', stage: 'CAMPEÓN · KARI', atk: 'Golpe de Gato', img: IMAGES.gatomonPartner },
      { name: 'ANGEWOMON', stage: 'ULTRA · KARI', atk: 'Flecha Celestial', img: IMAGES.angewomonEvo },
      { name: 'MAGNADRAMON', stage: 'MEGA · KARI', atk: 'Fuego Sagrado', img: IMAGES.angewomonEvo },
    ],
  },
};

export interface CrestData {
  child: string;
  crest: string;
  boost: string;
  img: string;
  defBonus: number;
  hpBonus: number;
  epBonus: number;
}

export const CRESTS: CrestData[] = [
  { child: 'Tai', crest: 'Valor', boost: '+25 DEF', img: IMAGES.crestValor, defBonus: 25, hpBonus: 0, epBonus: 0 },
  { child: 'Matt', crest: 'Amistad', boost: '+25 DEF', img: IMAGES.crestAmistad, defBonus: 25, hpBonus: 0, epBonus: 0 },
  { child: 'Sora', crest: 'Amor', boost: '+20 PS', img: IMAGES.crestAmor, defBonus: 0, hpBonus: 20, epBonus: 0 },
  { child: 'Izzy', crest: 'Conocimiento', boost: '+20 PE', img: IMAGES.crestConocimiento, defBonus: 0, hpBonus: 0, epBonus: 20 },
  { child: 'Mimi', crest: 'Pureza', boost: '+30 DEF', img: IMAGES.crestPureza, defBonus: 30, hpBonus: 0, epBonus: 0 },
  { child: 'Joe', crest: 'Sinceridad', boost: '+30 DEF', img: IMAGES.crestSinceridad, defBonus: 30, hpBonus: 0, epBonus: 0 },
  { child: 'T.K.', crest: 'Esperanza', boost: '+40 ESCUDO', img: IMAGES.crestEsperanza, defBonus: 40, hpBonus: 0, epBonus: 0 },
  { child: 'Kari', crest: 'Luz', boost: '+40 ESCUDO', img: IMAGES.crestLuz, defBonus: 40, hpBonus: 0, epBonus: 0 },
];

export interface VillainData {
  id: string;
  name: string;
  level: string;
  arc: string;
  shortArc: string;
  subPower: string;
  maxHp: number;
  atk: number;
  img: string;
  primaryButton?: boolean;
  targets: { name: string; meta: string; img: string }[];
}

export const VILLAINS: VillainData[] = [
  {
    id: 'devimon',
    name: 'Devimon',
    level: 'NV. 03',
    arc: 'Arco 01 · Isla File',
    shortArc: 'Villano · Oscuridad',
    subPower: 'Eliminado por Angemon',
    maxHp: 120,
    atk: 14,
    img: IMAGES.devimonBattle,
    primaryButton: true,
    targets: [
      { name: 'Angemon', meta: 'NV. 05 · Luz', img: IMAGES.angemonEvo },
      { name: 'Leomon', meta: 'NV. 04 · Bestia', img: IMAGES.gabumonBattle },
      { name: 'Ogremon', meta: 'NV. 04 · Ogro', img: IMAGES.gotsumonMonster },
    ],
  },
  {
    id: 'etemon',
    name: 'Etemon',
    level: 'NV. 05',
    arc: 'Arco 02 · Continente Server',
    shortArc: 'Villano · Red Oscura',
    subPower: 'Eliminado por MetalGreymon',
    maxHp: 160,
    atk: 18,
    img: IMAGES.etemonBattle,
    targets: [
      { name: 'MetalGreymon', meta: 'NV. 08 · Cyborg', img: IMAGES.metalGreymonEvo },
      { name: 'Datamon', meta: 'NV. 06 · Máquina', img: IMAGES.tentomonPartner },
      { name: 'Piximon', meta: 'NV. 07 · Hada', img: IMAGES.patamonPartner },
    ],
  },
  {
    id: 'myotismon',
    name: 'Myotismon',
    level: 'NV. 08',
    arc: 'Arco 03 · Mundo Real',
    shortArc: 'Villano · Vampiro',
    subPower: 'Elimina a Pumpkinmon y Gotsumon',
    maxHp: 210,
    atk: 24,
    img: IMAGES.myotismonBattle,
    targets: [
      { name: 'Pumpkinmon', meta: 'NV. 06 · Datos', img: IMAGES.pumpkinmonMonster },
      { name: 'Gotsumon', meta: 'NV. 05 · Roca', img: IMAGES.gotsumonMonster },
      { name: 'Wizardmon', meta: 'NV. 07 · Magia', img: IMAGES.wizardmonMonster },
    ],
  },
  {
    id: 'amos-oscuros',
    name: 'Amos Oscuros',
    level: 'NV. 12',
    arc: 'MetalSeadramon, Puppetmon, Machinedramon, Piedmon',
    shortArc: 'Arco 04 · Montaña Espiral',
    subPower: 'MetalSeadramon, Puppetmon, Machinedramon y Piedmon',
    maxHp: 280,
    atk: 30,
    img: IMAGES.amosOscurosBattle,
    targets: [
      { name: 'WarGreymon', meta: 'NV. 12 · Mega', img: IMAGES.warGreymonEvo },
      { name: 'MetalGarurumon', meta: 'NV. 12 · Mega', img: IMAGES.metalGarurumonEvo },
      { name: 'MagnaAngemon', meta: 'NV. 10 · Arcángel', img: IMAGES.angemonEvo },
    ],
  },
  {
    id: 'apocalymon',
    name: 'Apocalymon',
    level: 'NV. 15',
    arc: 'Jefe Final · T1',
    shortArc: 'Jefe Final · Temporada 1',
    subPower: 'Eliminó las joyas; derrotado por los niños de Digimon',
    maxHp: 360,
    atk: 36,
    img: IMAGES.apocalymonBattle,
    targets: [
      { name: 'Joyas Digimon', meta: 'NV. 15 · Reliquias', img: IMAGES.crestsShowcase },
      { name: 'Niños Elegidos', meta: 'NV. 15 · Equipo', img: IMAGES.taiAgumonHero },
      { name: 'Mundo Digital', meta: 'NV. 15 · Datos', img: IMAGES.omnimonEvo },
    ],
  },
];

export interface InventoryItem {
  id: string;
  name: string;
  category: 'heal' | 'gear';
  description: string;
  effectText: string;
  icon: string;
  iconBg: 'primary' | 'secondary';
  qty: number;
  equipped: boolean;
  hpHeal?: number;
  epHeal?: number;
  atkBonus?: number;
}

export const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 'disco-cura',
    name: 'Disco de Cura',
    category: 'heal',
    description: '+40 PS para el compañero',
    effectText: '+40 PS restaurados',
    icon: 'local_pharmacy',
    iconBg: 'primary',
    qty: 3,
    equipped: false,
    hpHeal: 40,
  },
  {
    id: 'carga-digivice',
    name: 'Carga Digivice',
    category: 'heal',
    description: '+25 PE de energía',
    effectText: '+25 PE recuperados',
    icon: 'bolt',
    iconBg: 'secondary',
    qty: 2,
    equipped: false,
    epHeal: 25,
  },
  {
    id: 'chip-fuerza',
    name: 'Chip de Fuerza',
    category: 'gear',
    description: '+15 Ataque en batalla',
    effectText: 'Equipado en compañero',
    icon: 'memory',
    iconBg: 'primary',
    qty: 1,
    equipped: false,
    atkBonus: 15,
  },
  {
    id: 'emblema-amistad',
    name: 'Emblema Amistad',
    category: 'gear',
    description: 'Activa Digievolución',
    effectText: 'Listo para digievolucionar',
    icon: 'auto_awesome',
    iconBg: 'secondary',
    qty: 1,
    equipped: false,
  },
];

export interface SwapPair {
  id: string;
  left: { name: string; kid: string; img: string; partnerId: string };
  right: { name: string; kid: string; img: string; partnerId: string };
  btnColor: 'primary' | 'secondary';
}

export const INITIAL_SWAP_PAIRS: SwapPair[] = [
  {
    id: 'pair-1',
    left: { name: 'Agumon', kid: 'Tai', img: IMAGES.agumonPartner, partnerId: 'agumon' },
    right: { name: 'Palmon', kid: 'Mimi', img: IMAGES.palmonPartner, partnerId: 'palmon' },
    btnColor: 'primary',
  },
  {
    id: 'pair-2',
    left: { name: 'Gabumon', kid: 'Matt', img: IMAGES.gabumonBattle, partnerId: 'gabumon' },
    right: { name: 'Biyomon', kid: 'Sora', img: IMAGES.biyomonPartner, partnerId: 'biyomon' },
    btnColor: 'secondary',
  },
  {
    id: 'pair-3',
    left: { name: 'Tentomon', kid: 'Izzy', img: IMAGES.tentomonPartner, partnerId: 'tentomon' },
    right: { name: 'Gomamon', kid: 'Joe', img: IMAGES.gomamonPartner, partnerId: 'gomamon' },
    btnColor: 'primary',
  },
  {
    id: 'pair-4',
    left: { name: 'Patamon', kid: 'T.K.', img: IMAGES.patamonPartner, partnerId: 'patamon' },
    right: { name: 'Gatomon', kid: 'Kari', img: IMAGES.gatomonPartner, partnerId: 'gatomon' },
    btnColor: 'secondary',
  },
];

export const ATTACK_MODES = [
  {
    id: 'BASE',
    label: 'BASE',
    name: 'AGUMON',
    modeLabel: 'FORMA BASE · ATQ 35',
    move: 'Llama Bebé',
    dmg: 35,
    img: IMAGES.agumonPartner,
  },
  {
    id: 'META',
    label: 'META',
    name: 'METALGREYMON',
    modeLabel: 'META · ATQ 85',
    move: 'Giga Destructor',
    dmg: 85,
    img: IMAGES.metalGreymonEvo,
  },
  {
    id: 'WAR',
    label: 'WAR',
    name: 'WARGREYMON',
    modeLabel: 'WAR · ATQ 140',
    move: 'Fuerza Terra',
    dmg: 140,
    img: IMAGES.warGreymonEvo,
  },
];
